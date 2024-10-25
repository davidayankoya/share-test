'use client'

import { InputProps as ChakraInputProps, InputGroup, InputLeftElement, Input as ChakraInput, FormControl, FormLabel, InputRightElement, BoxProps } from '@chakra-ui/react'
import React, { ChangeEvent, ChangeEventHandler, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BrandColor, TextColor } from 'constants/theme'
import { Text } from '../Text/Text'
import { FormikValues } from "formik";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Dayjs } from 'dayjs';
import { allCaps, dayDate, getNestedValue } from 'utils/utils'


interface InputProps extends ChakraInputProps {
    formik?: FormikValues;
    name?: string;
    value?: any;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    afterChange?: () => void;
    minDate?: string | Dayjs;
    maxDate?: string | Dayjs;
    label?: string;
    labelStyle?: any;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    border?: string;
    type?: string;
    margin?: string;
    radius?: string;
    error?: string;
    color?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    rightIconProps?: BoxProps;
    onRightIconClick?: VoidFunction;
    focusBorder?: string;
    style?: any;
    placeholderStyle?: any;
    custom?: boolean;
    decimal?: boolean;
    caps?: boolean;
    showPassword?: boolean;
    placeHolderProps?: BoxProps;
}

export const Input = React.memo(forwardRef(function Input ({
    label,
    name,
    value,
    onChange,
    afterChange,
    min,
    max,
    minDate,
    maxDate,
    placeholder,
    placeholderStyle,
    type,
    leftIcon,
    rightIcon,
    required,
    disabled,
    readOnly,
    border,
    focusBorder,
    radius,
    style,
    error,
    labelStyle,
    bgColor,
    color,
    custom,
    decimal,
    formik,
    onRightIconClick,
    rightIconProps,
    caps = false,
    showPassword,
    placeHolderProps,
    ...props
}: InputProps, ref: any) {
    // const inputRef = useRef<HTMLInputElement | null>(null);
    const [show, setShow] = React.useState(showPassword ?? false)

    const formikChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: val } = e.target;
        formik?.setFieldValue(name, caps === false ? val : allCaps(val));
        afterChange && afterChange()
    }

    // const formikChange = useMemo(() =>
    //     debounce(formChange, DEBOUNCE_INPUT_DELAY)
    // , [formik, name])
    // const val = value ? value : getNestedValue(formik?.values, name)

    const format = (val = '') => {
        if(decimal){
            return val ?? "";
        } else {
            return val ? parseInt(val, 10).toLocaleString() : ""
        }
    }
    
    const parse = (val = '') => val.replace(/[^\d\\.]/g, "");

    const handleClick = () => type === 'password' ? setShow(!show) : onRightIconClick && onRightIconClick()

    const handleMoneyChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        let e = ev
        e.target.value = parse(e.target.value)
        onChange ? onChange(e) : formik?.setFieldValue(name, e.target.value);
        afterChange && afterChange()
    }
    const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        let e = ev
        e.target.value = ((min && Number(e.target.value) < Number(min)) || (max && Number(e.target.value) > Number(max))) ? value : e.target.value
        onChange ? onChange(e) : formik?.setFieldValue(name, e.target.value);
        afterChange && afterChange()
    }
    const handlePercentChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        let e = ev
        e.target.value = (Number(e.target.value) < 0 || Number(e.target.value) > 100) ? value : e.target.value
        onChange ? onChange(e) : formik?.setFieldValue(name, e.target.value);
        afterChange && afterChange()
    }
    
    const handleType = useMemo(() => {
        if (type === 'percent') {
            return 'number'
        } else if (type === 'password') {
            return show ? "text" : "password"
        } else if (type === 'money') {
            return 'text'
        } else return type ?? 'text'
    }, [type, show])

    const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        return type === 'money' ? handleMoneyChange(ev) :
            type === 'percent' ? handlePercentChange(ev) :
            type === 'number' ? handleNumberChange(ev) : formikChange(ev)
    }, [type, value])

    const formError = error ? error : getNestedValue(formik?.errors, name) ?? ''


    return (
        <FormControl w={props.w ?? 'full'} cursor='pointer' pos='relative' display='flex' flexDir='column' alignItems='start' justifyContent='start'>
            {label &&
                <FormLabel
                    htmlFor={`${name} ${label}`}
                    color={TextColor.black}
                    fontSize='sm'
                    mb='8px'
                    fontWeight={400}
                    sx={labelStyle}
                    letterSpacing='.2rem'
                >
                    {label}{required && <Text size='sm' as='span' color='crimson'> *</Text>}
                </FormLabel>
            }
            <InputGroup>
                {leftIcon &&
                    <InputLeftElement
                        left={0.5}
                        top={0.5}
                        cursor='pointer'
                    >
                        {leftIcon}
                    </InputLeftElement>
                }
                <ChakraInput
                    ref={ref}
                    id={`${name} ${label}`}
                    name={name}
                    onChange={handleChange}
                    value={type === 'money' ? format(value) : value}
                    type={handleType}
                    isDisabled={disabled}
                    isRequired={required}
                    // isReadOnly={disabled}
                    size='md'
                    fontSize='md'
                    color={color ?? 'rgba(13, 41, 114, 1)'}
                    bgColor={bgColor ?? BrandColor.white}
                    pl={leftIcon ? '42px' : '12px'}
                    pr={(rightIcon || type === 'password') ? '42px' : '12px'}
                    py='1.5rem'
                    h={props.h || '44px'}
                    borderStyle='inset'
                    _focus={{ border: `` }}
                    _focusVisible={{ border: `1px solid ${BrandColor.highlight}` }}
                    placeholder={type === 'password' ? 'Password' : placeholder}
                    _placeholder={{ color: TextColor.grey, fontSize: "md", ...placeHolderProps }}
                    border={formError ? "2px solid crimson" : border || `2px solid rgba(203, 203, 203, 1)`}
                    borderRadius={radius || '6px'}
                    outline='none'
                    sx={style}
                    cursor='pointer'
                    min={type === 'date' ? dayDate(minDate).toString() : min}
                    max={type === 'date' ? dayDate(maxDate).toString() : max}
                    {...props}
                    w='full'
                />
                {(rightIcon || type === 'password') &&
                    <InputRightElement
                        onClick={handleClick}
                        right={1}
                        top={0.5}
                        cursor='pointer'
                        {...rightIconProps}
                    >
                        {type === 'password' ? show ?
                            <AiFillEyeInvisible color={BrandColor.grey} size={20} /> :
                            <AiFillEye color={BrandColor.grey} size={20} /> : rightIcon
                        }
                    </InputRightElement>
                }
            </InputGroup>

            {!!formError &&
                <Text size='sm' mt='6px' mb={0} color='crimson'>
                    {formError}
                </Text>
            }
        </FormControl>
    )
}))

Input.displayName = 'Input'