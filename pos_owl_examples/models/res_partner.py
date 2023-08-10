# -*- coding: utf-8 -*-
from odoo import _, api, fields, models


class Partner(models.Model):
    _inherit = "res.partner"

    cid = fields.Char(
        string="CID",
        help="Customer POS ID",
    )
