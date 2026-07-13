"use client";

import { useEffect, useState } from "react";
import { ContactFormData } from "@/validation/contact";
import { ContactFormSchema } from "@/validation/contact";

//types
import { ModalComponentState } from "@/components/modal/ModalComponent.types";

//components
import ButtonComponent from "@/components/ButtonComponent";
import ModalComponent from "@/components/modal/ModalComponent";
import SectionHeadingComponent from "@/components/SectionHeadingComponent";

//modules
import BannerModule from "../../modules/BannerModule";

//image
import man_pulls_arrows from "../../../public/images/banner-images/man_pulls_arrows.jpg";
import IconComponent from "@/components/IconComponent";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
/* 
ContactFormData is the type alias from the form fields submitted created by using inference within contact.ts
key of operator extracts the property names from this type (fullName, email, enquiryType, message)
record is a built-in TS utility type with this syntax:
    type Record<K, V> = {
    [P in K]: V;
    }

it creates an obj of key value pairs so this form would be (fullName is Property in Key) and string is value:
{
 fullname: string;
 email:    string;
 enquiryType: string;
 message: string;
}

Partial another built in utility type with this syntax:
type Partial<T> = {
    [P in keyof T]?: T[P];
}

by adding partial you have included ? in the above syntax meaning every property within the error object is optional. This means if only 1 of the propeties has an error, the error object will only consist of the property which errored and not unnecessariliy include the others which did not have errors.


This approach means the contact.ts type alias can be updated and this form alias will automatically update to match it, keeping everything in sync!
*/


function ContactUsPage() {
    const [modal, setModal] = useState<ModalComponentState>({
        isOpen: false,
        status: "info",
        title: "",
        text: "",
    });

    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        email: "",
        message: "",
        enquiryType: "BEGINNERS_COURSE" //default
    });
    const [errors, setErrors] = useState<ContactFormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        //if errors state has errors in it, once a user types in a field the errors will disappear.
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined,
        }));
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const validation = ContactFormSchema.safeParse(formData); //scroll to bottom for detail

        if (!validation.success) {
            const fieldErrors: ContactFormErrors = {}; //fieldErrors will match the type created ealier for contact form errors (so if only fullName field had an error on it, only this property will be present in the ContactFormErrors)

            /*
            --Transforming the data--
            This block takes the issues returned from zod, which may look something like this:
            [
                {
                    path: ["fullName"],
                    message: "Please enter your full name."
                },
                {
                    path: ["message"],
                    message: "Please enter your message."
                }
            ] 

            and converts it in to a format that is easier to access from the UI when validating form fields. Post transformation it looks like this:
            {
                fullName: "Please enter your full name.",
                message: "Please enter your message."
            }
            */
            validation.error.issues.forEach((issue) => {
                const field = issue.path[0];

                if (typeof field === "string") {
                    fieldErrors[field as keyof typeof fieldErrors] = issue.message;
                }
            });

            setErrors(fieldErrors);

            setModal((prevModal) => {
                return {
                    ...prevModal,
                    isOpen: true,
                    status: "error",
                    title: "Validation errors",
                    text: "There are errors on one or more of the form fields. Please correct these errors and submit your form."
                }
            });

            return;
        }

        //reset errors data if validation successful
        setErrors({});

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            setModal((prevModal) => {
                return {
                    ...prevModal,
                    isOpen: true,
                    status: "error",
                    title: "Submission failed",
                    text: "Sorry, we were unable to submit this form. Please try again later. If the problem persists, please contact the website administrator at <email here>."
                }
            });
            return;
        }

        //reset form fields post submission
        setFormData({
            fullName: "",
            email: "",
            message: "",
            enquiryType: "BEGINNERS_COURSE" //Default
        });

        setModal((prevModal) => { //triggers modal to inform user the submission was successful
            return {
                ...prevModal,
                isOpen: true,
                status: "success",
                title: "Submission successful",
                text: "Thank you for your enquiry, we will be in touch shortly."
            }
        });
    };

    //When menu is open this prevents users scrolling
    useEffect(() => {
        const root = document.body;

        if (modal.isOpen) {
            root.classList.add("no-scroll");
        } else {
            root.classList.remove("no-scroll");
        }

        // Cleanup on unmount
        return () => root.classList.remove("no-scroll");
    }, [modal.isOpen]);

    const closeModal = () => {
        setModal((prevModal) => {
            return {
                ...prevModal,
                isOpen: false
            }
        });
    };

    return (
        <>
            <BannerModule
                bannerTitle="Contact us"
                bannerImage={man_pulls_arrows}
                bannerImageAlt="two archers"
            />
            <section className="contactUsModule">
                <div className="container">
                    <div className="grid">
                        <div className="col-4 sm-col-12 md-col-9 lg-col-7">
                            <div className="contactUsModule__intro">
                                <SectionHeadingComponent
                                    sectionSubHeading="// Contact us"
                                    sectionHeading="We're here to help"
                                    sectionHeadingLight="- ask a question or make a booking"
                                />
                                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, minima. Rem dignissimos possimus asperiores sapiente quidem. Ipsa laboriosam culpa odit minus officiis ad, voluptatem eaque cupiditate asperiores tempore repudiandae itaque.</p>
                            </div>
                        </div>
                        <div className="col-4 sm-col-12 md-col-9 lg-col-7">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className={errors.fullName ? "input__wrapper input__wrapper--error" : "input__wrapper"}>
                                    <label htmlFor="fullName">Full name</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                        className="input"
                                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                        aria-invalid={!!errors.fullName}
                                    />
                                    {
                                        errors.fullName &&
                                        <div className="input__message">
                                            <IconComponent
                                                iconType="decorative"
                                                iconName={faCircleExclamation}
                                                iconSize="small"
                                                variant="secondary"
                                            />
                                            <p
                                                id="fullName-error"
                                            >{errors.fullName}</p>
                                        </div>
                                    }
                                </div>
                                <div className={errors.email ? "input__wrapper input__wrapper--error" : "input__wrapper"}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="JohnDoe@gmail.com"
                                        onChange={handleChange}
                                        className="input"
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        aria-invalid={!!errors.email}
                                    />
                                    {
                                        errors.email &&
                                        <div className="input__message">
                                            <IconComponent
                                                iconType="decorative"
                                                iconName={faCircleExclamation}
                                                iconSize="small"
                                                variant="secondary"
                                            />
                                            <p id="email-error">
                                                {errors.email}
                                            </p>
                                        </div>
                                    }
                                </div>
                                <fieldset>
                                    <legend className="body">Select the nature of your enquiry</legend>
                                    <div className="input__wrapper">
                                        <label htmlFor="beginners">Beginners course</label>
                                        <input
                                            type="radio"
                                            id="beginners"
                                            name="enquiryType"
                                            value="BEGINNERS_COURSE"
                                            checked={formData.enquiryType === "BEGINNERS_COURSE"}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                    </div>
                                    <div className="input__wrapper">
                                        <label htmlFor="coaching">1 to 1 coaching</label>
                                        <input
                                            type="radio"
                                            id="coaching"
                                            name="enquiryType"
                                            value="ONE_TO_ONE_COACHING"
                                            checked={formData.enquiryType === "ONE_TO_ONE_COACHING"}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                    </div>
                                    <div className="input__wrapper">
                                        <label htmlFor="general-enquiry">General enquiry</label>
                                        <input
                                            type="radio"
                                            id="general-enquiry"
                                            name="enquiryType"
                                            value="GENERAL_ENQUIRY"
                                            checked={formData.enquiryType === "GENERAL_ENQUIRY"}
                                            onChange={handleChange}
                                            aria-describedby={errors.message ? "enquiryType-error" : undefined}
                                            aria-invalid={!!errors.message}
                                            className="input"
                                        />
                                    </div>
                                    {
                                        errors.enquiryType &&
                                        <div className="input__message">
                                            <p id="enquiryType-error">{errors.enquiryType}</p>
                                        </div>
                                    }
                                </fieldset>
                                {
                                    formData.enquiryType === "GENERAL_ENQUIRY" &&
                                    <div className={errors.message ? "input__wrapper input__wrapper--error" : "input__wrapper"}>
                                        <label htmlFor="message">What is the nature of your enquiry</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            placeholder="Enter your message here"
                                            onChange={handleChange}
                                            className="textarea"
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                            aria-invalid={!!errors.message}
                                        />
                                        {
                                            errors.message &&
                                            <div className="input__message">
                                                <IconComponent
                                                    iconType="decorative"
                                                    iconName={faCircleExclamation}
                                                    iconSize="small"
                                                    variant="secondary"
                                                />
                                                <p
                                                    id="message-error"
                                                >
                                                    {errors.message}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                }
                                <ButtonComponent
                                    buttonType="submit"
                                    variant="primary"
                                >
                                    Submit
                                </ButtonComponent>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <ModalComponent
                {...modal}
                onClose={closeModal}
            >
                {
                    modal.status === "error" ? (
                        <ButtonComponent
                            buttonType="button"
                            variant="primary"
                            onClick={closeModal}
                        >
                            Try again
                        </ButtonComponent>
                    ) : modal.status === "success" ? (
                        <ButtonComponent
                            buttonType="link"
                            href={"/"}
                            variant="primary"
                        >
                            Back to the homepage
                        </ButtonComponent>
                    ) : null
                }
            </ModalComponent>
        </>
    );
}

export default ContactUsPage;


/*

const validation = ContactFormSchema.safeParse(formData);
This line passes the data collected from the fields to the zod for validation checks.

If it passes, it will return:
{
  success: true,
  data: { ...validated fields... }
}

If it fails, it will return something like this:
{
  success: false,
  error: {
    issues: [
      {
        code: "custom",
        path: ["message"],
        message: "Please enter your message."
      }
    ]
  }
}

The path tells you which field the error belonged to and the message is the error text you can display to provide user feedback.

*/