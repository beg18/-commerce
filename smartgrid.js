const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "380px"
        }
    },
    mixinNames: {
        column: "coll",
        columnFloat: "coll-float",
        columnInlineBlock: "coll-ib",
        columnPadding: "coll-padding",
        columnOffsets: "coll-offsets"
    },
    oldSizeStyle: false
};

smartgrid('./src/precss', settings);