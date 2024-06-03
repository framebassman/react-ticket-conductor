import React, { Component } from 'react';
import throttle from 'lodash/throttle';

import { Scanner } from './Scanner';
import { beep } from './Beep';
import { DetectedBarcode } from './DetectedBarcode';
import Status from '@/status/Status';
import './Camera.css';

class Camera extends Component {
  constructor(props: any) {
    super(props);
    this._onDetected = throttle(this._onDetected.bind(this), 3000, {
      trailing: false,
    });
  }

  _onDetected(detectedBarcode: DetectedBarcode) {
    beep();
    const { code } = detectedBarcode.codeResult;
    // this.props.verify(code, VerificationMethod.Barcode);
  }

  render() {
    return (
      <div className="camera-container">
        <Status />
        <Scanner onDetected={this._onDetected} />
      </div>
    );
  }
}

export default Camera;
// export default connect(() => ({}), actionCreators)(Camera);
