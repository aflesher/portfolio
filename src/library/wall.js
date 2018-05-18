import Web3 from 'web3';
import abi from './abi.json';
import config from './config.json';

var useRopsten = false;
if (typeof window !== `undefined`) {
  useRopsten = window.web3 && !config.local;
}

var web3 = new Web3(useRopsten ? window.web3.currentProvider : config.host),
  contract = new web3.eth.Contract(abi, useRopsten ? config.ropstenAddress : config.localAddress);

function getAccount() {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((err, accounts) => {
      resolve(accounts[0]);
    });
  });
}

function verifyNetwork() {
  return new Promise((resolve, reject) => {
    web3.eth.net.getId((err, netId) => {
      if (netId == 3) resolve();
      else reject();
    });
  });
}

function getAddresses() {
  return web3.eth.getAccounts();
}

function createPost(text, font, red, green, blue) {
  return getAccount().then((account) => {
    return contract.methods.createPost(text, font, red, green, blue).send({from: account, gas: 500000});
  });
}

function updatePost(index, text, font, red, green, blue) {
  return getAccount().then((account) => {
    return contract.methods.updatePost(index, text, font, red, green, blue).send({from: account, gas: 500000});
  });
}

function getPostsCount() {
  return contract.methods.getPostsCount().call();
}

function listForSale(index, price) {
  return getAccount().then((account) => {
    return contract.methods.sellPost(index, price).send({from: account, gas: 500000});
  });
}

function unlistForSale(index) {
  return getAccount().then((account) => {
    return contract.methods.closePostSale(index).send({from: account, gas: 500000});
  });
}

function buyPost(index, price) {
  return getAccount().then((account) => {
    return contract.methods.buyPost(index).send({from: account, gas: 500000, value: price});
  });
}

function getPosts(offset, size) {
  return contract.methods.getPostsCount().call().then((result) => {
    let start = Math.min(offset, Math.max(result - 1, 0));
    let finish = Math.min(offset + size, result);
    let promises = [];
    for (let i = start; i < finish; i++) {
      promises.push(contract.methods.getPost(i).call());
    }
    
    return Promise.all(promises);
  }).then((posts) => {
    for (let i = 0; i < posts.length; i++) {
      posts[i].color = {r: posts[i].red, g: posts[i].green, b: posts[i].blue};
    }
    return Promise.resolve(posts);
  });
}

module.exports = {
  getAddresses,
  createPost,
  updatePost,
  getPosts,
  getPostsCount,
  getAccount,
  listForSale,
  unlistForSale,
  buyPost
};