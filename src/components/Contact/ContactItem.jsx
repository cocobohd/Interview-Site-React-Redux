import Footer from "../4-container/Footer";
import { Formik, Field, Form } from "formik";

export default function ContactItem() {
  return (
    <>
    <div className="contact--inputs">
      <h1 className="contact--title">Contact</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
      <Form>
        <div className="contact--container">
            <div className="contact--div">
              <p className="contact--num">(3)</p>
              <h1 className="contact--text">
                <Field className="contact--field" name="name" type="text" placeholder="Name" />
              </h1>
            </div>
        </div>
        <div className="contact--container">
            <div className="contact--div">
              <p className="contact--num">(3)</p>
              <h1 className="contact--text">
                <Field className="contact--field" name="email" type="email" placeholder="Email"/>
              </h1>
            </div>
        </div>
        <div className="contact--container last">
            <div className="contact--div">
              <p className="contact--num">(3)</p>
              <h1 className="contact--text">
                <Field className="contact--field" name="message" type="text" placeholder="Message"/>
              </h1>
            </div>
        </div>
        <div className="contact--container btn last submit">
            <div className="contact--div">
              <p className="contact--num btn">(3)</p>
              <h1 className="contact--text">
                <button className="contact--field btn" type="submit">Submit</button>
              </h1>
            </div>
        </div>
      </Form>
      </Formik>
      </div>
      <Footer 
        footer="footer contact"
        allRights="all--rights"
        findUs="findus--text"
        link1="link1"
        link2="link2"
      />
    </>
  )
}