import styles from "./Form.module.css";
import { inputs } from "../../constants/api";
import { useForm } from "react-hook-form";
import { APIPost } from "../../constants/api";
import axios from "axios";
import { useEffect, useState } from "react";

function Form({ formStyles, inputStyles, buttonStyles, buttonName, click }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [serverResponse, setServerResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [buttonText, setButtonText] = useState(buttonName || "Get a discount");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(APIPost, data);
      setServerResponse(response.data);
      setIsSuccess(true);
      setButtonText("Request Submitted");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setServerResponse("An error occurred while submitting the form.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess || serverResponse) {
      const timer = setTimeout(() => {
        setServerResponse(null);
        setIsSuccess(false);
        setButtonText(buttonName || "Get a discount");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, serverResponse]);

  return (
    <form
      className={styles.form}
      onSubmit={click ? handleSubmit(click) : handleSubmit(onSubmit)}
      style={formStyles}
    >
      {inputs.map(({ name, type, placeholder, validation }) => (
        <div key={name} className={styles.container_input}>
          <input
            {...register(name, validation)}
            type={type}
            placeholder={placeholder}
            className={errors[name] ? styles.errorInput : ""}
            id={!formStyles ? styles.form_discount : styles.form_cart}
            style={inputStyles}
          />
          {errors[name] && (
            <span className={styles.span}>{errors[name].message}</span>
          )}
        </div>
      ))}
      <button
        type={"submit"}
        disabled={isLoading}
        className={`${styles.button} ${
          buttonText === "Request Submitted" ? styles.submitted : ""
        }`}
        style={buttonStyles}
      >
        {buttonText}
      </button>
      {serverResponse && typeof serverResponse === "string" && (
        <p className={styles.error}>{serverResponse}</p>
      )}
      {!isSuccess && serverResponse && (
        <p className={styles.errorMessage}>{serverResponse}</p>
      )}
    </form>
  );
}

export default Form;
