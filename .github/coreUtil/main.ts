import * as core from '@actions/core'

const myInput = core.getInput('inputName', { required: true })
const myBooleanInput = core.getBooleanInput('booleanInputName', { required: true })
core.setOutput('outputKey', 'outputVal')
