import React, {
  useState,
  useEffect,
  createContext,
  memo
} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styles from './styles.scss';
import DismissableAlert from './DismissableAlert';

const COPY_MESSAGE = 'Successfully copied to clipboard.';

const SimpleEditable = ({
  value,
  type,
  onSave,
  errorComponent,
  className,
  copyToClipboardEnabled,
  hoverButtons,
  customComponent,
  display
}) => {
  const [editing, setEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [customValue, setCustomValue] = useState(value);
  const {
    handleSubmit,
    register,
    errors,
    setValue
  } = useForm();

  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    const textField = document.createElement('input');
    if (type === 'custom') {
      textField.value = display(customValue).props.children.join('');
    } else {
      textField.value = currentValue;
    }
    document.body.appendChild(textField)
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setCopySuccess(COPY_MESSAGE);
  };

  const notifyDismiss = () => {
    setCopySuccess('');
  };

  const submit = values => {
    setEditing(false);
    if (type === 'custom') {
      setCustomValue(values);
      onSave(values);
    } else {
      setCurrentValue(values.myInput);
      onSave(values.myInput);
    };
  };

  const startEditting = () => {
    setEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setEditing(false);
    }
  };

  const getHoverButtons = () => {
    if (!hoverButtons) { return null; }
    return [hoverButtons()];
  };

  const displayErrors = () => {
    if (errorComponent) {
      return [errorComponent(errors.myInput.message)];
    }

    return (
      <div className="invalid-feedback">
        {errors.myInput.message}
      </div>
    );
  };

  useEffect(() => {
    setValue('myInput', value);
    setCurrentValue(value);
  }, []);

  const getDismissableAlert = () => {
    if (copySuccess.length) {
      return (
        <DismissableAlert
          message={COPY_MESSAGE}
          timeout={1500}
          notifyDismiss={() => {
            notifyDismiss();
          }}
        />
      );
    }
  };

  const getValue = () => {
    if (type === 'custom') {
      return (
        <label onClick={startEditting}>{[display(customValue)]}</label>
      );
    }
    return (
      <label onClick={startEditting}>{currentValue}</label>
    );
  };

  const displayValue = () => {
    return (
      <div className={`${styles[className]} ${className}__container`}>
        <div className={`${copySuccess.length ? styles['with-alert'] : '' }`}>
          { getValue() }
          { copyToClipboardEnabled && getDismissableAlert() }
        </div>
        { !copySuccess.length &&
          <div className={styles['editable-actions']}>
            { copyToClipboardEnabled &&
                <span className={styles['editable-action__icon']} onClick={copyToClipboard}>
                  <i className="fa fa-copy"></i>
                </span>
            }
            { getHoverButtons() }
          </div>
        }
      </div>
    )
  };

  const getButtons = () => {
    return (
      <div>
        <button type="submit" className="btn">
          <i className="fa fa-check"></i>
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => { setEditing(false) }}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
  };

  const getInput = () => {
    const hasErrors = errors.myInput;
    if (type === 'text') {
      return (
        <input
          autoFocus
          type={type}
          autoComplete="off"
          defaultValue={currentValue}
          onKeyDown={handleKeyDown}
          ref={register({
            required: 'Required'
          })}
          className={`form-control ${hasErrors ? 'is-invalid' : '' }`}
          name="myInput"
        />
      );
    }
  };

  const getSimpleEditable = () => {
    const hasErrors = errors.myInput;

    if (type === 'custom') {
      return [customComponent(customValue, getButtons(), submit)];
    }

    return (
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-row">
          <div className="col-md-8 mb-3">
            { getInput() }
            { hasErrors && displayErrors() }
          </div>
          {getButtons()}
        </div>
      </form>
    );
  };

  return (
    <div className={`${styles[className]} ${editing ? 'active' : '' }`}>
      { !editing ? displayValue() : getSimpleEditable() }
    </div>
  )
};

SimpleEditable.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onSave: PropTypes.func,
  errorComponent: PropTypes.func,
  className: PropTypes.string,
  copyToClipboardEnabled: PropTypes.bool,
  hoverButtons: PropTypes.func,
  customComponent: PropTypes.func
};

SimpleEditable.defaultProps = {
  className: 'simple-editable',
  copyToClipboardEnabled: false
}

export default SimpleEditable;
