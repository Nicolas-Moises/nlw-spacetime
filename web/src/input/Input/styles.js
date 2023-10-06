import styled from 'styled-components';
import { TextField, InputLabel, FormControl } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import generalColors from '@/styles/themes/generalColors';
import OutlinedInput from '@mui/material/OutlinedInput';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    width: 17px;
    & path {
      fill: ${({ secondary, disabled, theme, iconColor }) => {
    if (iconColor) {
      return iconColor;
    }
    if (disabled) {
      return theme.components.input.disabled;
    }
    if (secondary && !disabled) {
      return theme.components.input.border;
    }
    return theme.components.input.iconColorSearch;
  }};
    }
  }
`;

export const Search = styled.input`
  width: 36px;
  height: 36px;
  max-width: 246px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.components.input.backgroundSearch};
  border: 1px solid transparent;

  outline: 0;
  padding: 0px 5px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 34px;
  padding-left: 15px;
  transition: all 0.6s;
  color: ${({ theme }) => theme.components.input.textSearch} !important;

  &.showInput {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.components.input.borderSearch};
    padding-left: 15px;
    color: ${({ theme }) => theme.components.input.textSearch} !important;
    &::placeholder {
      color: ${({ theme }) => theme.components.input.placeholderSearch};
    }
  }

  &::placeholder {
    color: transparent;
  }
`;

export const SearchSecondary = styled.input`
  width: 452px;
  height: 36px;

  background: ${({ theme }) => theme.components.input.background};
  border: 1px solid ${({ theme }) => theme.components.input.border};
  border-radius: 7px;

  outline: 0;
  color: ${({ theme }) => theme.components.input.text};
  padding: 0px 5px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;

  &::placeholder {
    color: ${({ theme }) => theme.components.input.placeholder};
  }

  &:disabled {
    color: ${({ theme }) => theme.components.input.disabled};
    border: 1px solid ${({ theme }) => theme.components.input.disabled};

    &::placeholder {
      color: ${({ theme }) => theme.components.input.disabled};
    }
  }

  &:focus, &:active{
    background: ${({ theme }) => theme.components.input.backgroundActive};
    border: 1px solid ${({ theme }) => theme.components.input.borderActive};
    color: ${({ theme }) => theme.components.input.textActive};
  }
`;

export const InputTextField = styled(TextField)`
  width: 100%;

  
   //Container Input
  .MuiInputBase-root {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    &, &.MuiOutlinedInput-root{
      border-radius: 7px;
      height: 44px;
      outline: none !important; 
    

      //input
      .MuiInputBase-input, .MuiOutlinedInput-input {
        padding: 0px 22px;
        color:${({ theme }) => theme.components.input.text};
      }


      input:-internal-autofill-selected,
      input:-webkit-autofill,
      &:-webkit-autofill {
        -webkit-transition-delay: 9999999s;
        background-color: transparent !important;
        -webkit-appearance: textfield !important;
        appearance: textfield !important;
        -moz-appearance: textfield !important;
        color: ${({ theme }) => theme.components.input.text} !important;
      }


      &.Mui-focused{
        //input
        .MuiInputBase-input, .MuiOutlinedInput-input {
          color: ${({ theme }) => theme.components.input.textActive} !important;
        }
      }
    }

  }


  //Label Input
  .MuiInputLabel-root {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    transform: translate(22px, 10px) scale(1);
    color: ${({ theme }) => theme.components.input.textActive} !important;

    &.MuiInputLabel-shrink {
      transform: translate(22px, -10px) scale(0.75);
      color: ${({ theme }) => theme.components.input.labelColorActive};
      font-weight: 500;
    }
   
    &.MuiFormLabel-filled{
      color: ${({ theme }) => theme.components.input.textActive} !important;

      & + .MuiInputBase-root{
        .MuiInputBase-input, .MuiOutlinedInput-input {
          color: ${({ theme }) => theme.components.input.textActive} !important;
        }
      }
    }

    &.Mui-focused {
      color: ${({ theme }) => theme.components.input.textActive} !important;
      &.MuiFormLabel-filled{
        color: ${({ theme }) => theme.components.input.labelColorActive} !important;
      }
    }
  }



  //fieldset
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.components.input.border} !important;
    padding: 0 16px;
    legend {
      font-size: 0.75em;
    }
  }


  
  .Mui-focused {
    outline: 0 !important;

    //fieldset
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.components.input.borderActive} !important;
      border-width: 1px !important;
    }
  }

  .Mui-disabled {
    opacity: 0.75;
    cursor: not-allowed;
    -webkit-text-fill-color: ${({ theme }) => theme.components.input.disabled}  !important;
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.components.input.disabled} !important;
    }
    .MuiInputLabel-root, .MuiInputLabel-outlined {
      color: ${({ theme }) => theme.components.input.disabled} !important;
    }
  }
  
 

  &.error {
    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      color: ${generalColors.error} !important;
    }
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      color: ${generalColors.error} !important;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.error} !important;
    }

    .MuiOutlinedInput-root.Mui-focused,
    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.error} !important;
    }

    .MuiOutlinedInput-root:hover,
    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.error} !important;
    }
  }

  &.success-input {
    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      color: ${generalColors.success} !important;
    }
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      color: ${generalColors.success} !important;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.success} !important;
    }

    .MuiOutlinedInput-root.Mui-focused,
    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.success} !important;
    }

    .MuiOutlinedInput-root:hover,
    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.success} !important;
    }
  }

  .text-field-icon-adornment {
    svg {
      & {
        fill: ${({ error }) => error ? generalColors.error : generalColors.grayLight} !important;
      }
    }
  }

  &:has(input:focus) .text-field-icon-adornment {
    svg {
      & {
        fill: ${({ error }) =>
    error
      ? generalColors.error
      : generalColors.primaryDefault} !important;
      }
    }
  }

  &:has(input:focus) {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.primaryDefault} !important;
      padding: 0 16px;
      legend {
        font-size: 0.75em;
      }
    }
  }
`;

export const InputDefault = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 7px;
  padding: 0px 5px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-left: 15px;
  margin-top: 20px;
`;

export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .MuiInputBase-root {
    padding-right: 25px;
  }

  .eyeVisible {
    margin-top: 3px;
    margin-left: -40px;
    z-index: 1000;
    right: 15px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);

    svg {
      & {
        fill: ${({ error }) =>
    error ? generalColors.error : generalColors.grayLight} !important;
      }
    }
  }

  &:has(input:focus) .eyeVisible {
    svg {
      & {
        fill: ${({ error }) =>
    error
      ? generalColors.error
      : generalColors.primaryDefault} !important;
      }
    }
  }
`;

export const InputPassword = styled(TextField)`
  width: 100%;

  .MuiInputBase-root {
    border-radius: 7px !important;
  }
`;

export const SelectDate = styled(DesktopDatePicker)`
  width: 100%;

  & input {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  .MuiInputBase-root {
    width: 100%;
    border-radius: 7px;
    height: 44px;
  }

  &.Mui-disabled {
    .MuiOutlinedInput-notchedOutline {
      opacity: 0.5 !important;
    }
  }
`;

export const Localization = styled(LocalizationProvider)`
  width: auto;
`;

export const InputLabelDefault = styled(InputLabel)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 34px;
  color:${({ theme }) => theme.components.input.text};

  &.disabled{
      color: ${({ theme }) => theme.components.input.disabled};
    }
`;

export const FormControlDefault = styled(FormControl)`
  width: 100%;
  border-radius: 7px;
  height: 44px;

  .MuiOutlinedInput-root {
    border-radius: 7px;
    height: 44px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;



    
    color:${({ theme }) => theme.components.input.text};


    .Mui-disabled {
      opacity: 0.9;
      -webkit-text-fill-color: ${({ theme }) => theme.components.input.disabled} !important;
      color: ${({ theme }) => theme.components.input.disabled} !important;
    }
  }

  .MuiInputLabel-outlined {
    color:${({ theme }) => theme.components.input.text};
  }
  .MuiFormLabel-root.disabled{
      color: ${({ theme }) => theme.components.input.disabled};
    }

  .container-text-error {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 3px;
    .text-error {
      color: ${generalColors.error};
      font-size: 12px;
      line-height: 14px;
      font-family: Manrope;
    }
  }

  &.error-form-control-container {
    height: 78px;
  }
`;

export const InputTextFieldMaterial = styled(TextField)`
  width: 100%;
  height: 44px;
  border-radius: 7px;

  .MuiInputBase-root {
    border-radius: 7px;
  }

  .MuiInputBase-input {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: ${generalColors.primaryDark} !important;
    &::placeholder {
      color: #000 !important;
    }
  }
`;

export const InputAdornmentDefault = styled(OutlinedInput)`
  .MuiFormLabel-root,
  .MuiInputBase-root {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.components.input.text};

    &.Mui-disabled{
      color: ${({ theme }) => theme.components.input.disabled} !important;
     
    }


 
    .disabled{
        color:${({ theme }) => theme.components.input.disabled} !important;
    }
  
  }

  .MuiOutlinedInput-notchedOutline {
    border-color:${({ theme }) => theme.components.input.border} !important;
    legend {font-size: 0.75em;}
  }

  &.Mui-disabled {

    .MuiOutlinedInput-notchedOutline {
      border-color:${({ theme }) => theme.components.input.disabled} !important;
      legend{ 
        color: ${({ theme }) => theme.components.input.disabled} !important; 
      }
      opacity: 0.75;
    }
  }
 


  
  &.error-form-control {
    .MuiFormLabel-root,
    .MuiInputBase-root {
      color: ${generalColors.error} !important;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${generalColors.error} !important;
    }
  }
`;

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;

  .container-input-icon {
    position: absolute;
    right: 15px;
    top:50%;
    transform: translateY(-50%);
  }

  .row-input-error {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .container-text-success {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 3px;
    .success {
      margin-top: 3px;
      color: ${generalColors.success};
      font-size: 12px;
      line-height: 14px;
      font-family: Manrope;
    }
  }

  .container-text-error {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 3px;
    .text-error {
      color: ${generalColors.error};
      font-size: 12px;
      line-height: 14px;
      font-family: Manrope;
    }
  }
`;

export const ContainerLabelError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
  margin-bottom: 3px;
  .text-error {
    color: ${generalColors.error};
    font-size: 12px;
    line-height: 14px;
    font-family: Manrope;
  }
`;
