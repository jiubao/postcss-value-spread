var postcss = require('postcss');

const styleReg = /(hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/i;
const widthReg = /(0|0px|\dpx)/i;

const borderStyle = str => {
  var result = styleReg.exec(str);
  return result ? result[0] : result
}

const borderWidth = str => {
  var result = widthReg.exec(str);
  return result ? result[0] : result
}

module.exports = postcss.plugin('postcss-border-spread', opts => root => {
  root.walkDecls(/^border(-top|-right|-bottom|-left)?$/i, decl => {
    // console.log('decl: ', decl)
    var props = { width: '', style: '', color: '' }
    var prop = decl.prop
    props.style = borderStyle(decl.value)
    props.width = borderWidth(decl.value)
    props.color = decl.value.replace(styleReg, '').replace(widthReg, '').trim()

    if (props.color) decl.cloneAfter({prop: `${prop}-color`, value: props.color})
    if (props.style) decl.cloneAfter({prop: `${prop}-style`, value: props.style})
    if (props.width) decl.cloneAfter({prop: `${prop}-width`, value: props.width})

    decl.remove()
  })

  root.walkDecls(/^margin|padding$/i, decl => {
    var prop = decl.prop
    var values = postcss.list.space(decl.value)
    if (!values || values.length === 1) return

    var top = bottom = values[0]
    var right = left = values[1]

    if (values.length >= 3) bottom = values[2]
    if (values.length >= 4) left = values[3]

    decl.cloneAfter({ prop: `${prop}-left`, value: left })
    decl.cloneAfter({ prop: `${prop}-bottom`, value: bottom })
    decl.cloneAfter({ prop: `${prop}-right`, value: right })
    decl.cloneAfter({ prop: `${prop}-top`, value: top })

    decl.remove()
  })
})
