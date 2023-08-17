/** @odoo-module **/

import Registries from "point_of_sale.Registries"
import PartnerDetailsEdit from "point_of_sale.PartnerDetailsEdit"

const {useState} = owl;
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
