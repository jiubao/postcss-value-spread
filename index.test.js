var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
          // console.log('outting: ', result.css)
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

test('border', () => {
  return run('a{ border: solid 1px #ccc; }', 'a{ border-width: 1px; border-style: solid; border-color: #ccc; }')
})

test('border-top', () => {
  return run('a{ border-top: solid 1px #ccc; }', 'a{ border-top-width: 1px; border-top-style: solid; border-top-color: #ccc; }')
})

test('margin', () => {
  return run('a{ margin: 2px 3px; }', 'a{ margin-top: 2px; margin-right: 3px; margin-bottom: 2px; margin-left: 3px; }')
})

test('padding x', () => {
  return run('a{ padding: 2px; }', 'a{ padding: 2px; }')
})

test('padding x x', () => {
  return run('a{ padding: 2px 3px; }', 'a{ padding-top: 2px; padding-right: 3px; padding-bottom: 2px; padding-left: 3px; }')
})

test('padding x x x', () => {
  return run('a{ padding: 2px 3px 4px; }', 'a{ padding-top: 2px; padding-right: 3px; padding-bottom: 4px; padding-left: 3px; }')
})

test('padding x x x x', () => {
  return run('a{ padding: 2px 3px 4px 5px; }', 'a{ padding-top: 2px; padding-right: 3px; padding-bottom: 4px; padding-left: 5px; }')
})
