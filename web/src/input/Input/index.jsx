import { ClickAwayListener, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  Container,
  Search,
  SearchSecondary,
  InputTextField,
  InputDefault,
  InputPassword,
  ContainerPassword,
  SelectDate,
  Localization,
  InputLabelDefault,
  InputAdornmentDefault,
  FormControlDefault,
  ContainerInputError,
  ContainerLabelError,
} from './styles';
import { useState } from 'react';
import SVGIcon from '../SVGIcon';
import EyeShow from '../EyeShow';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import generalColors from '@/styles/themes/generalColors';

const InputComponent = ({
  id,
  type = 'search',
  value,
  onChangeText,
  style,
  placeholderText,
  maxLength,
  autoCapitalize,
  disabled,
  iconWidth = 17,
  iconHeight = 17,
  iconColor,
  label,
  onKeyUp,
  position = 'end',
  inputIcon,
  onBlur,
  error,
  maxDate,
  typeErrorIcon = 'exclamation',
  typeSuccessIcon = 'success',
  success,
  iconTextField,
  autoFocus,
  autoComplete,
  onPaste,
}) => {
  const [className, setClassName] = useState('');
  const [valueReceived, setValueReceived] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleSetClassName = className => {
    setClassName(className);
    if (className !== '') {
      return setValueReceived(value);
    }

    return setValueReceived('');
  };

  dayjs.locale('pt-br');

  const translatorErrorIcon = {
    exclamation: <SVGIcon iconName="errorIcon" />,
  };

  const translatorSuccessIcon = {
    success: <SVGIcon iconName="success" color={generalColors.success} />,
  };

  const handleDefineClassName = () => {
    if (error) {
      return 'error';
    }
    if (success) {
      return 'success-input';
    }

    return;
  };

  const translator = {
    default: (
      <InputDefault
        id={id}
        type="text"
        value={value}
        onChange={onChangeText}
        style={style}
        placeholder={placeholderText}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        disabled={disabled}
        onKeyUp={onKeyUp}
        autoFocus={autoFocus}
        onPaste={onPaste}
      />
    ),
    search: (
      <ClickAwayListener onClickAway={() => handleSetClassName('')}>
        <Container onClick={() => handleSetClassName('showInput')}>
          <Search
            id={id}
            type="text"
            value={valueReceived}
            onChange={onChangeText}
            style={style}
            placeholder={placeholderText}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            disabled={disabled}
            className={className}
          />
          <SVGIcon
            iconName="search"
            width={iconWidth}
            height={iconHeight}
            style={{ marginLeft: -28 }}
          />
        </Container>
      </ClickAwayListener>
    ),
    searchSecondary: (
      <Container secondary disabled={disabled} iconColor={iconColor}>
        <SearchSecondary
          id={id}
          type="text"
          value={value}
          onChange={onChangeText}
          style={style}
          placeholder={placeholderText}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          disabled={disabled}
        />
        <SVGIcon
          iconName="search"
          width={iconWidth}
          height={iconHeight}
          style={{ marginLeft: -28 }}
        />
      </Container>
    ),
    textField: (
      <ContainerInputError>
        <div className="row-input-error">
          <InputTextField
            id={id}
            label={label}
            value={value}
            onChange={onChangeText}
            disabled={disabled}
            style={style}
            placeholder={placeholderText}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            inputProps={{
              maxLength: maxLength,
            }}
            InputLabelProps={{
              shrink: value && value !== '' && typeof value !== 'undefined',
            }}
            onBlur={onBlur}
            className={handleDefineClassName()}
            InputProps={{
              endAdornment: (
                <div className="text-field-icon-adornment">{iconTextField}</div>
              ),
            }}
          />

          {error && (
            <div className="container-input-icon">
              {translatorErrorIcon[typeErrorIcon]}
            </div>
          )}

          {success && (
            <div className="container-input-icon">
              {translatorSuccessIcon[typeSuccessIcon]}
            </div>
          )}
        </div>

        {success && typeof success != 'boolean' && (
          <div className="container-text-success">
            <div style={{ marginTop: 2, marginRight: 8 }}>
              {translatorSuccessIcon[typeSuccessIcon]}
            </div>

            <span className="success">{success}</span>
          </div>
        )}

        {error && typeof error != 'boolean' && (
          <div className="container-text-error">
            <div style={{ marginRight: 8 }}>
              {translatorErrorIcon[typeErrorIcon]}
            </div>

            <span className="text-error">{error}</span>
          </div>
        )}
      </ContainerInputError>
    ),
    password: (
      <ContainerPassword>
        <InputPassword
          id={id}
          className="input-password"
          label={placeholderText}
          value={value}
          onChange={onChangeText}
          disabled={disabled}
          style={style}
          onEnd
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          type={showPassword ? 'text' : 'password'}
        />
        <EyeShow
          isVisible={showPassword}
          setIsVisible={setShowPassword}
          className="eyeVisible"
        />
      </ContainerPassword>
    ),
    date: (
      <Localization dateAdapter={AdapterDayjs}>
        <SelectDate
          label={label}
          value={value}
          style={style}
          onChange={onChangeText}
          renderInput={params => <TextField {...params} />}
          maxDate={maxDate}
        />
      </Localization>
    ),
    dateAnotherIcon: (
      <Localization dateAdapter={AdapterDayjs}>
        <SelectDate
          label={label}
          value={value}
          style={style}
          onChange={onChangeText}
          renderInput={params => {
            return (
              <TextField
                {...params}
                InputProps={{
                  endAdornment: (
                    <div
                      onClick={() =>
                        params?.InputProps?.endAdornment?.props?.children?.props?.onClick()
                      }
                    >
                      <SVGIcon iconName="date" style={{ cursor: 'pointer' }} />
                    </div>
                  ),
                }}
              />
            );
          }}
          maxDate={maxDate}
        />
      </Localization>
    ),
    passwordWithPlaceholder: (
      <>
        <ContainerPassword error={error}>
          <InputTextField
            id={id}
            className={error ? 'input-password error' : 'input-password'}
            label={placeholderText}
            value={value}
            onChange={onChangeText}
            disabled={disabled}
            style={style}
            onEnd
            type={showPassword ? 'text' : 'password'}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
          />

          <EyeShow
            isVisible={showPassword}
            setIsVisible={setShowPassword}
            className="eyeVisible"
          />
        </ContainerPassword>

        {error && typeof error != 'boolean' && (
          <ContainerLabelError>
            <div style={{ marginRight: 8 }}>
              {translatorErrorIcon[typeErrorIcon]}
            </div>

            <span className="text-error">{error}</span>
          </ContainerLabelError>
        )}
      </>
    ),
    inputTextIcon: (
      <FormControlDefault>
        <InputLabelDefault className={`${disabled ? 'disabled' : ''}`}>{label}</InputLabelDefault>
        <InputAdornmentDefault
          id={id}
          value={value}
          label={label}
          onChange={onChangeText}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          disabled={disabled}
          style={style}
          endAdornment={
            <InputAdornment position={position}>{inputIcon}</InputAdornment>
          }
        />
      </FormControlDefault>
    ),
    inputStartTextIcon: (
      <FormControlDefault
        className={error ? 'error-form-control-container' : ''}
      >
        <InputLabelDefault>{label}</InputLabelDefault>
        <InputAdornmentDefault
          id={id}
          value={value}
          label={label}
          onChange={onChangeText}
          disabled={disabled}
          maxLength={maxLength}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          style={style}
          startAdornment={
            <InputAdornment position={position}>{inputIcon}</InputAdornment>
          }
          className={error ? 'error-form-control' : ''}
        />

        {error && typeof error != 'boolean' && (
          <div className="container-text-error">
            <div style={{ marginRight: 8 }}>
              {translatorErrorIcon[typeErrorIcon]}
            </div>

            <span className="text-error">{error}</span>
          </div>
        )}
      </FormControlDefault>
    ),
  };

  return <>{translator[type]}</>;
};

export default InputComponent;
