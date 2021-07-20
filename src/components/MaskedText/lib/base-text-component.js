import React, { PureComponent } from 'react';
import MaskResolver from './mask-resolver';
import CustomMask from './masks/custom.mask';
import { MASKS_TYPE } from './masks/maskInRegex';

export default class BaseTextComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._resolveMaskHandler();
  }

  componentDidMount() {
    this._bindProps(this.props);
  }

  componentDidUpdate(prevProps) {
    this._bindProps(prevProps);
  }

  updateValue(text) {
    const maskedText = this._getMaskedValue(text);
    const rawText = this.props.includeRawValueInChangeText
      ? this.getRawValueFor(maskedText)
      : undefined;

    return {
      maskedText,
      rawText,
    };
  }

  isValid() {
    return this._maskHandler.validate(
      this._getDefaultValue(this.props.value),
      this._getOptions(),
    );
  }

  getRawValueFor(value) {
    return this._maskHandler.getRawValue(
      this._getDefaultValue(value),
      this._getOptions(),
    );
  }

  getRawValue() {
    return this.getRawValueFor(this.props.value);
  }

  getDisplayValueFor(value) {
    return this._getMaskedValue(value);
  }

  _getOptions() {
    return this.props.options;
  }

  _mustUpdateValue(newValue) {
    return this.props.value !== newValue;
  }

  _resolveMaskHandler() {
    if (!MASKS_TYPE[this.props.type]) {
      this._maskHandler = MaskResolver.resolve(this.props.type);
    } else {
      this._maskHandler = new CustomMask();
    }
  }

  _bindProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this._resolveMaskHandler();
    }
  }

  _getDefaultMaskedValue(value) {
    if (this._getDefaultValue(value) === '') {
      return '';
    }

    return this._getMaskedValue(value);
  }

  _getMaskedValue(value) {
    const defaultValue = this._getDefaultValue(value);
    if (defaultValue === '') {
      return '';
    }
    if (MASKS_TYPE[this.props.type]) {
      return this._maskHandler.getValue(defaultValue, this.props);
    }
    return this._maskHandler.getValue(defaultValue, this._getOptions());
  }

  _getDefaultValue(value) {
    if (value === undefined || value === null) {
      return '';
    }

    return value;
  }
}
