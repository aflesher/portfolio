var Web3 = require("web3");

var web3 = new Web3('http://localhost:7545'),
  contractAddress = '0x12f6f514f60b6604b118d0a04cb1a41e0519d6da',
  contract = new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "posts",
      "outputs": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "font",
          "type": "uint8"
        },
        {
          "name": "color",
          "type": "bytes6"
        },
        {
          "name": "poster",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "forSale",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "buyPost",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_text",
          "type": "string"
        },
        {
          "name": "_font",
          "type": "uint8"
        },
        {
          "name": "_color",
          "type": "bytes6"
        }
      ],
      "name": "createPost",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        },
        {
          "name": "_text",
          "type": "string"
        },
        {
          "name": "_font",
          "type": "uint8"
        },
        {
          "name": "_color",
          "type": "bytes6"
        }
      ],
      "name": "updatePost",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "sellPost",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPostsCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "closePostSale",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "NewListening",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "SoldPost",
      "type": "event"
    }
  ], contractAddress, {from: '0xedE1B5A2cFf6E64209beaD9E3238683000F4035D'});

function getAddresses() {
  return web3.eth.getAccounts();
}

function addPost(text, font, color) {
  return contract.methods.createPost(text, font, web3.utils.utf8ToHex(color)).send({from: '0xF7a1234911ECFD3DcF294000DfE16E37b0D59AF3', gas: 500000});
}

function getPosts(offset, size) {
  return contract.methods.getPostsCount().call().then((result) => {
    console.log(result);
    let start = Math.min(offset, result - 1);
    let finish = Math.min(offset + size - 1, result - 1);
    let promises = [];
    for (let i = start; i < finish; i++) {
      promises.push(contract.methods.posts(i).call());
    }
    
    return Promise.all(promises);
  }).then((posts) => {
    for (let i = 0; i < posts.length; i++) {
      posts[i].color = '#' + web3.utils.hexToUtf8(posts[i].color);
    }
    return Promise.resolve(posts);
  });
}

module.exports = {
  getAddresses,
  addPost,
  getPosts
};