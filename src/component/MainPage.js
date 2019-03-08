import React, { Component } from 'react';

import Page1 from './page1/Page1'
import Page2 from './page2/Page2'

export default class MainPage extends Component {



  render() {

    return (
<div>
  <table border="1">
    <tbody>
      <tr>
        <td>
          <b>Page1</b> <Page1 />
        </td>
      </tr>
      <tr>
        <td>
          <b>Page2</b> <Page2 />
        </td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
}
