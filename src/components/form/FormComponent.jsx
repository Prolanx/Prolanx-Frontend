import { Formik } from "formik";
import React from "react";

const FormComponent = (props) => {
  const { children, initialValues, schema } = props;
  const { handleSubmit, resetRef, useFormik } = props;

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={schema}
        resetRef={resetRef}
        onSubmit={(values) => {
          if (handleSubmit) handleSubmit(values);
        }}

        // onReset={(values, reset)=> {

        // }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {/* {children({ formik: formik })} */}

            {/* {formik.setFieldError("sections", null) } */}
            {useFormik ? (
              <React.Fragment>{children(formik)}</React.Fragment>
            ) : (
              <React.Fragment>
                <React.Fragment>{children}</React.Fragment>
              </React.Fragment>
            )}
            <button type="button" hidden ref={resetRef} onClick={formik.resetForm}></button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
