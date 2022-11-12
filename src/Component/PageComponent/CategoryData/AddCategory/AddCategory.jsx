import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "../../../../Hoc/Axios/CreateAxios";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import storage from "../../../../HOC/FIREBASE/FIREBASE";
import { ToastContainer, toast } from "react-toastify";
function AddCategory({ setShowCategory }) {
  // form names and keys for mapping
  const [progress, setprogress] = useState(0);
  const [progressShow, setprogressShow] = useState(false);
  const Navigate = useNavigate();
  const FormInitial = [
    {
      label: "Category Name",
      apiKey: "category_name",
      placeholder: "Enter Category name here !",
      type: "text",
    },
  ];
  const Submit = (val) => {
    console.log(val);
    try {
     val.image="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
     axios.post("category",val).then(res=>{
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
    //             .post(`${process.env.REACT_APP_API_URL}/category`, val, {
    //               headers: {
    //                 "Content-Type": "application/json",
    //               },
    //             })
    //             .then((res) => {
    //               console.log(res);
    //               setprogressShow(false);
    //               // Navigate("/category");
    //               toast.success(res ? res?.data?.message : "");
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
      {/* form is done here */}
      <div>
        <Formik
          initialValues={{
            category_name: "",
            image: null,
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            Submit(values);
            resetForm();
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
                              placeholder={"Enter Category name"}
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
                              placeholder={"Enter Category name"}
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
                    Category Image
                  </label>
                  <label
                    htmlFor="image"
                    className="poppins font-medium bg-GrayLight h-full w-full border"
                  >
                    <img
                      src={
                        values.image
                          ? URL.createObjectURL(values.image)
                          : "https://images.unsplash.com/photo-1660039031080-7779c1760a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      }
                      alt="Loading ..."
                      className="h-96 w-96 mx-auto cursor-pointer"
                    />
                  </label>
                  <input
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

export default AddCategory;