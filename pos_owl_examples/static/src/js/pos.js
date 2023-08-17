/** @odoo-module **/

import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"
import PartnerDetailsEdit from "point_of_sale.PartnerDetailsEdit"

const {useState} = owl;

console.log("OWL examples js loaded ok... ---> ")
const CustomProductScreen =
    (ProductScreen) => class extends ProductScreen {
        setup() {
            super.setup()
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

Registries.Component.extend(ProductScreen, CustomProductScreen)

//todo: separar en componentes independientes para respetar standard
const CustomPartnerDetailsEdit =
    (PartnerDetailsEdit) => class extends PartnerDetailsEdit {
        setup() {
            super.setup()
            const partner = this.props.partner;
            this.changes = useState({
                ...this.changes,
                cid: partner.cid || "",
            })
        }
    }
Registries.Component.extend(PartnerDetailsEdit, CustomPartnerDetailsEdit)
