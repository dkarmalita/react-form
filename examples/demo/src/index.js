import React from 'react'
import ReactDOM from 'react-dom'

import 'css/main.scss'

import {
  // UnstyledForm as Form,
  StyledForm as Form,
} from 'scenes'

ReactDOM.render((
  <Form />
), document.getElementsByTagName( 'div' )[0])
