const express = require('express');
const ordersController = require('../controllers/ordersController');

function routes() {

    const orderRouter = express.Router();
    const controller = ordersController();

    orderRouter.route('/orders')
        .get(controller.get)
        .post(controller.post);

    orderRouter.route('/orders/:Id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.remove);

    orderRouter.route('/orderByOrderNumber')
        .get(controller.get);

    orderRouter.route('/ordersByCustomerId')
        .get(controller.get);

    return orderRouter;
}

module.exports = routes;