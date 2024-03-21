import alfy from 'alfy'
import _ from 'lodash'
import __ from 'underscore'

const output = eval(alfy.input)

alfy.output([
  {
    title: _.isObject(output) ? JSON.stringify(output) : output,
    subtitle: 'Copy to clipboard',
    arg: _.isObject(output) ? JSON.stringify(output, null, 2) : output,
  },
])
