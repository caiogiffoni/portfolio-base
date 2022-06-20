import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: string | null;
  colorWordsDesc: string;
  icon?: IconType;
  lx: any;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.400",
  focus: "gray.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon, label, colorWordsDesc, lx, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) setVariation("error");
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) setVariation("focus");
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) setVariation("filled");
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel color={colorWordsDesc}>{label}</FormLabel>}
      <InputGroup flexDirection={"column"}>
        {icon && (
          <InputLeftElement mt="2.5" color={inputVariation[variation]}>
            <Icon as={icon} />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          bgColor="gray.50"
          variant="outline"
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          _hover={{ bgColor: "gray.10" }}
          _placeholder={{ color: "gray.500" }}
          size="lg"
          h="60px"
          ref={ref}
          {...lx.inputProps}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="red.500">{error}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const InputForm = forwardRef(InputBase);
