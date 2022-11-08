import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "../../../Hoc/Axios/CreateAxios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../../Hoc/FIREBASE/FIREBASE.jsx";
import Table from "../../UI/Table/Table";
import { MdAdd, MdDelete } from "react-icons/md";

function AddProduct({ setShowProduct }) {
  // form names and keys for mapping
  const [Description, setDescription] = useState("");
  const [progress, setprogress] = useState(0);
  const [progressShow, setprogressShow] = useState(false);
  const Navigate = useNavigate();
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [ID, setID] = useState("");
  const [Tbody, setTbody] = useState([]);

  const formats = [
    "header",
    "fonts",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];
  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5] },
        {
          font: [],
        },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "video"],
      ["clear"],
    ],
  };
  const Thead = [
    { title: "s.nO" },
    { title: "unit" },
    { title: "price" },
    { title: "action" },
  ];
  // const Tbody = [{ price: "300", unit: "ml" }];
  const getBrand = () => {
    try {
      axios
        .get("/brand")
        .then((res) => {
          console.log(res);
          setBrand(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBrand();
  }, []);
  let BrandOptions = [];
  brand.map((val, i) => {
    let storeBrandData = {
      id: val._id,
      value: val.Brand_name,
    };
    BrandOptions.push(storeBrandData);
  });
  const getCategory = () => {
    axios
      .get("/category")
      .then((res) => {
        console.log(res);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  let CategoryOptions = [];

  category.map((val, i) => {
    let store = {
      id: val._id,
      value: val.category_name,
    };
    console.log(store);
    CategoryOptions.push(store);
  });

  const FormInitial = [
    {
      label: "Product Name",
      apiKey: "product_name",
      placeholder: "Enter product name here !",
      type: "text",
    },
    {
      label: "Brand",
      apiKey: "product_brand",
      placeholder: "Enter product brand here !",
      type: "select",
      options: [{ value: "work", id: "work" }, ...BrandOptions],
    },
    {
      label: "Category",
      apiKey: "product_Category",
      placeholder: "Enter product category here !",
      type: "select",
      options: [{ value: "work", id: "work" }, ...CategoryOptions],
    },

    {
      label: "Quantity",
      apiKey: "product_quantity",
      placeholder: "enter product quantity here",
      type: "text",
    },
  ];
  const FormDetas = [
    {
      label: "Unit",
      apiKey: "product_unit",
      placeholder: "enter product unit here",
      type: "text",
    },
    {
      label: "Price",
      apiKey: "product_price",
      placeholder: "enter product price here",
      type: "number",
    },
  ];

  const Submit = (val) => {
    console.log(val);
    try {
      setprogressShow(true);
      const fileName = new Date().getTime() + val.Brand_name;
      const storageRef = ref(storage, ` /image/${fileName}`);
      const UploadTask = uploadBytesResumable(storageRef, val.image);
      UploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploaded = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogress(uploaded);
          if (progress === 100) {
            // Navigate("/category");
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((url) => {
            // handleInputeState(name,url);
            console.log(url);
            try {
              val.image = url;
              val.priceandunit = Tbody;
              val.desc = Description;
              axios
                .post(`${process.env.REACT_APP_API_URL}/product`, val, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((res) => {
                  console.log(res);
                  setprogressShow(false);
                  // Navigate("/category");
                })
                .catch((err) => {
                  console.log(err);
                  setprogressShow(false);
                });
            } catch (err) {
              console.log(err);
            }
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
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
  const SubmitValuesInTable = (value, resetForm) => {
    // console.log(value);
    setShow(true);
    // setID(id);
    console.log(value, Tbody);
    setTbody([...Tbody, value]);
    resetForm();
  };

  const DeleteTableData = (id) => {
    Tbody.splice(id, 1);
    setTbody([...Tbody]);
  };
  return (
    <div className="p-6">
      {/* form is done here */}
      <div>
        <Formik
          initialValues={{
            product_name: "",
            image: null,
          }}
          onSubmit={(values) => {
            console.log(values);
            Submit(values);
          }}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="grid laptop:grid-cols-2 laptop:gap-8">
                  <div>
                    {FormInitial &&
                      FormInitial.map((val, i) => {
                        if (val.type === "select") {
                          return (
                            <div key={i} className="flex flex-col space-y-2">
                              <label className="px-1 mt-2 poppins font-medium">
                                {val.label}
                              </label>
                              <Field
                                name={val.apiKey}
                                as={val.type}
                                placeholder={"Enter product name"}
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
                              <label className="px-1  mt-2 poppins font-medium">
                                {val.label}
                              </label>
                              <Field
                                name={val.apiKey}
                                type="text"
                                placeholder={"Enter product name"}
                                className="border py-2 px-1 "
                              />
                            </div>
                          );
                        }
                        // }
                      })}
                  </div>
                  <div className="">
                    <Formik
                      initialValues={{
                        product_unit: "",
                        product_price: "",
                      }}
                      onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        SubmitValuesInTable(values, resetForm);
                      }}
                    >
                      {({ values, handleSubmit }) => {
                        return (
                          <Form>
                            <div>
                              {FormDetas &&
                                FormDetas.map((val, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="flex flex-col space-y-2"
                                    >
                                      <label className="px-1 mt-2 poppins font-medium">
                                        {val.label}
                                      </label>
                                      <Field
                                        name={val.apiKey}
                                        type={val.type}
                                        placeholder={"Enter product name"}
                                        className="border py-2 px-1 "
                                      />
                                    </div>
                                  );
                                })}
                              <div className=" flex justify-end -mt-[41px] ">
                                <button
                                  type={"button"}
                                  onClick={handleSubmit}
                                  className="w-20 h-[40px] capitalize font-medium bg-yellow-500  p- text-white"
                                >
                                  add
                                </button>
                              </div>
                              <div className="">
                                <div className="px-1 mt-3 mb-2 poppins font-medium capitalize">
                                  details of price and unit
                                </div>

                                {Tbody.length > 0 ? (
                                  <Table Head={Thead}>
                                    {Tbody.map((val, i) => {
                                      return (
                                        <tr
                                          key={i}
                                          className="  font-semibold border border-gray-200 text-gray-600"
                                          align="center "
                                        >
                                          <td>
                                            <div className="my-2">{i + 1}</div>
                                          </td>
                                          <td>
                                            {show ? val.product_unit : ""}
                                          </td>
                                          <td>
                                            {show ? val.product_price : ""}
                                          </td>
                                          <td>
                                            <button
                                              type="button"
                                              onClick={() => DeleteTableData(i)}
                                            >
                                              <MdDelete className="w-5 h-5" />
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </Table>
                                ) : (
                                  <div className="">
                                    <Table
                                      Head={Thead}
                                      height="no data in form"
                                    ></Table>
                                    <div className="text-2xl flex   justify-center items-center  h-0">
                                      No table data available yet!
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
                  {/* for image */}
                  <div className="mt-4 w-full flex flex-col">
                    <label htmlFor="image" className="poppins font-medium pb-2">
                      Product Image
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
                        alt="productimage"
                        className="h-72 mx-auto cursor-pointer"
                      />
                    </label>
                    <input
                      id={"image"}
                      name={"image"}
                      type="file"
                      accept=".gif,.jpg,.jpeg,.png,"
                      className="border-2 p-3 w-full outline-none mt-1"
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
                  {/* description tag is here */}

                  <div className="mt-4 w-full flex flex-col">
                    <label htmlFor="image" className="poppins font-medium pb-2">
                      Product Desription
                    </label>
                    <ReactQuill
                      style={{
                        height: "200px !important",
                        border: `none !important`,
                      }}
                      className="fold:w-11/12 h-[280px] quill-container  "
                      modules={modules}
                      formats={formats}
                      // {...props.register}
                      value={Description}
                      onChange={(val) => {
                        setDescription(val);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full  mt-10  tablet:mt-16">
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
    </div>
  );
}
export default AddProduct;