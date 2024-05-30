import React, { Component } from 'react';

export class Result extends Component<any, any> {
  render() {
    const { result } = this.props;

    if (result === undefined || result.codeResult.code === '') {
      return null;
    }
    return (
      <li>
        {result.codeResult.code} [{result.codeResult.format}]
      </li>
    );
  }
}
