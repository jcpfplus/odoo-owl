# -*- coding: utf-8 -*-
{
    'name': 'OWL POS',
    'version': '1.2',
    'summary': 'OWL Examples',
    'category': 'POS',
    'author': 'odooexperto',
    'maintainer': 'odooexperto',
    'website': 'https://odooexperto.com',
    'license': 'AGPL-3',
    'depends': [
        'base',
        'point_of_sale',
    ],
    'data': [
        'views/res_partner.xml',

    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_owl_examples/static/src/css/*.css',
            'pos_owl_examples/static/src/xml/*.xml',
            'pos_owl_examples/static/src/js/*.js',
        ],
    },
    'installable': True,
}
