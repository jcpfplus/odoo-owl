/** @odoo-module **/

import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"

console.log("OWL examples js loaded ok... ---> ")

const CustomProductScreen = (ProductScreen) => class extends ProductScreen {
    setup() {
        super.setup()
        console.log("ProductScreen override ok ----> ")
    }

    async _clickProduct(event) {
        await super._clickProduct(...arguments)
        const product_id = await this.rpc({
            model: 'product.product',
            method: 'search_read',
            args: [[['id', '=', event.detail.id],], ['id', 'display_name', 'qty_available', 'virtual_available']],
            context: this.env.session.user_context,
        })
        console.log("_clickProduct: ", product_id)

        //todo: validar este if, seguro que falla cuando el backend retorna null, que dices?
        if (product_id[0].qty_available === 0) {
            this.showNotification("Sin Stock!!!", 8000)
        }
    }
}

//todo: aplicar un clean code al final, los console, etc
Registries.Component.extend(ProductScreen, CustomProductScreen)
