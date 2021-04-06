'use strict';

const io = require('socket.io-client')

const host = 'http://localhost:3000'
const caps = io.connect(host);

const faker = require('faker');

caps.on('delievered', itemDelievered)

setInterval(() => {
  let mockOrder = {
    storeName: faker.company.companyName(),
    orderID: faker.address.zipCode(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress()
  }

  caps.emit('pickup', mockOrder)
}, 5000)

function itemDelievered(payload) {
  console.log(`Delievery Complete. Package ${payload.orderID} on ${new Date()}`)
}

module.exports = {
  itemDelievered: itemDelievered
}