import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "../../../Hoc/Axios/CreateAxios";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import storage from "../../../HOC/FIREBASE/FIREBASE.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Input = ({ field, form }) => (
  <input
    id={"image"}
    name={"image"}
    type="file"
    accept=".gif,.jpg,.jpeg,.png,"
    className="border-2 p-1 w-full outline-none mt-2"
    onChange={(event) => {
      let name = "image";
      console.log("event.target", form.values[name]);
      console.log(event.target.files[0]);
      let value = event.target.files[0];
      value === undefined
        ? form.setFieldValue(name, form.values[name])
        : form.setFieldValue(name, event.target.files[0]);
    }}
  />
);
function AddBrand({ setShowData, getBrand }) {
  // form names and keys for mapping
  const [progress, setprogress] = useState(0);
  const [progressShow, setprogressShow] = useState(false);
  const Navigate = useNavigate();
  const [slowRedirect, setSlowRedirect] = useState(false);
  const FormInitial = [
    {
      label: "Brand Name",
      apiKey: "Brand_name",
      placeholder: "Enter Brand name here !",
      type: "text",
    },
  ];

  const Submit = (val, resetForm) => {
    console.log(val);
    try {
      val.image="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      axios.post("brand",val).then(res=>{
       console.log(res)
      }).catch(error=>{
       console.log(error)
      })
     } catch (error) {
     console.log(error)  
     }
    // try {
    //   setprogressShow(true);
    //   const fileName = new Date().getTime() + val.Brand_name;
    //   const storageRef = ref(storage, ` /image/${fileName}`);
    //   const UploadTask = uploadBytesResumable(storageRef, val.image);
    //   UploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //       const uploaded = Math.floor(
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //       );
    //       setprogress(uploaded);
    //       if (progress === 100) {
    //         // Navigate("/category");
    //       }
    //     },
    //     (err) => {
    //       console.log(err);
    //     },
    //     () => {
    //       getDownloadURL(UploadTask.snapshot.ref).then((url) => {
    //         // handleInputeState(name,url);
    //         console.log(url);
    //         try {
    //           val.image = url;
    //           axios
    //             .post(`${process.env.REACT_APP_API_URL}/brand`, val, {
    //               headers: {
    //                 "Content-Type": "application/json",
    //               },
    //             })
    //             .then((res) => {
    //               console.log(res);
    //               toast.success(
    //                 res
    //                   ? res?.data?.message
    //                   : "Brand has been added successfully"
    //               );
    //               if (res.status === 201) {
    //                 setprogressShow(false);
    //                 getBrand();
    //                 // val.image = null;
    //                 resetForm();
    //                 // return true;
    //                 // setSlowRedirect(true);
    //               }
    //             })
    //             .catch((err) => {
    //               console.log(err);
    //               setprogressShow(false);
    //             });
    //         } catch (err) {
    //           console.log(err);
    //         }
    //       });
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // useEffect(() => {
  //   let interval = setTimeout(() => {
  //     setShowData("view");
  //   }, 2000);
  //   return () => clearTimeout(interval);
  // }, [slowRedirect]);

  let Spinner;
  if (progressShow) {
    Spinner = (
      <div
        style={{ background: "rgba(0,0,0,.5)" }}
        className="fixed h-screen w-screen top-0 left-0 z-50 flex items-center justify-center"
      >
        <div className="h-44 w-44  rounded-md z-50">
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {Spinner}
      {/* form is done here */}
      <div>
        <Formik
          initialValues={{
            Brand_name: "",
            image: null,
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
             Submit(values, resetForm);
            // resetForm();
            // console.log(val, "sjdhshd");
          }}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="grid  gap-8">
                  {FormInitial &&
                    FormInitial.map((val, i) => {
                      if (val.type === "select") {
                        return (
                          <div key={i} className="flex flex-col space-y-2">
                            <label className="px-1 poppins font-medium">
                              {val.label}
                            </label>
                            <Field
                              name={val.apiKey}
                              as={val.type}
                              placeholder={"Enter Brand name"}
                              className="border py-2 px-1 font-normal outline-none capitalize"
                            >
                              {val.options.map((val, i) => {
                                return (
                                  <option
                                    className="capitalize"
                                    key={i}
                                    value={val.id}
                                  >
                                    {val.value}
                                  </option>
                                );
                              })}
                            </Field>
                          </div>
                        );
                      } else {
                        return (
                          <div key={i} className="flex flex-col space-y-2">
                            <label className="px-1 poppins font-medium">
                              {val.label}
                            </label>
                            <Field
                              name={val.apiKey}
                              type="text"
                              placeholder={"Enter Brand name"}
                              className="border py-2 px-1 "
                            />
                          </div>
                        );
                      }
                    })}
                </div>
                {/* for image */}
                <div className="mt-4 w-full flex flex-col">
                  <label htmlFor="image" className="poppins font-medium pb-2">
                    Brand Image
                  </label>
                  <label
                    htmlFor="image"
                    className="poppins font-medium bg-GrayLight h-full w-full border"
                  >
                    {console.log(values, "sdsdsds")}
                    <img
                      src={
                        values.image
                          ? URL.createObjectURL(values.image)
                          : "https://images.unsplash.com/photo-1660039031080-7779c1760a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      }
                      alt="Brandimage"
                      className="h-96 w-96 mx-auto cursor-pointer"
                    />
                  </label>
                  {/* <input
                    id={"image"}
                    name={"image"}
                    type="file"
                    accept=".gif,.jpg,.jpeg,.png,"
                    className="border-2 p-1 w-full outline-none mt-2"
                    onChange={(event) => {
                      let name = "image";
                      console.log("event.target", values[name]);
                      console.log(event.target.files[0]);
                      let value = event.target.files[0];
                      value === undefined
                        ? setFieldValue(name, values[name])
                        : setFieldValue(name, event.target.files[0]);
                    }}
                  /> */}
                  <Field
                    component={Input}
                    label="Cover image"
                    name="image"
                    value={values["image"]}
                  />
                </div>
                <div className="w-full mt-6 ">
                  <button
                    type="submit"
                    className="px-8 py-2 bg-green-600 text-white rounded-sm shadow-md cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddBrand;