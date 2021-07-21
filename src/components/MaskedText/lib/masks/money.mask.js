import VanillaMasker from 'vanilla-masker';
import BaseMask from './_base.mask';

const MONEY_MASK_SETTINGS = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$',
  suffixUnit: '',
};

export default class MoneyMask extends BaseMask {
  static getType() {
    return 'money';
  }

  getValue(value, settings, oldValue) {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);

    let sanitized = this._sanitize(value, mergedSettings);

    if (mergedSettings.suffixUnit && oldValue && sanitized) {
      if (sanitized.length == oldValue.length - 1) {
        const cleared = this.removeNotNumbers(sanitized);
        sanitized = cleared.substr(0, cleared.length - 1);
      }
    }

    return VanillaMasker.toMoney(sanitized, mergedSettings);
  }

  getRawValue(maskedValue, settings) {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);
    let normalized = super.removeNotNumbers(maskedValue);

    const dotPosition = normalized.length - mergedSettings.precision;
    normalized = this._insert(normalized, dotPosition, '.');

    return Number(normalized);
  }

  validate(value, settings) {
    return true;
  }

  _sanitize(value, settings) {
    if (typeof value === 'number') {
      return value.toFixed(settings.precision);
    }

    return value;
  }

  _insert(text, index, string) {
    if (index > 0) {
      return (
        text.substring(0, index) + string + text.substring(index, text.length)
      );
    }
    return string + text;
  }
}
