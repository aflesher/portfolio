var Web3 = require("web3"),
  abi = require('./abi.json'),
  config = require('./config.json')

var web3 = new Web3(config.host),
  contract = new web3.eth.Contract(abi, config.address);

function getAddresses() {
  return web3.eth.getAccounts();
}

function createPost(text, font, red, green, blue) {
  return contract.methods.createPost(text, font, red, green, blue).send({from: '0xc9B23c523034434fB4dC339cd335B32b351dC87c', gas: 500000});
}

function listForSale(index) {
  return contract.methods.sellPost(index).send({from: '0xc9B23c523034434fB4dC339cd335B32b351dC87c', gas: 500000});
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
  getPosts
};