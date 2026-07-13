import { z } from "zod";

export const ContactFormSchema = z.object({
    fullName: z
        .string() //ensures submission fields value is a string 
        .trim() //removes leading / trailing whitespace
        .min(2, "Please enter your full name.") //must be 2 characters or longer in length
        .max(100, "Name is too long."), //cannot exceed 100 characters in length

        //If any of the above conditions are not met, the error message provided is returned

    email: z
        .email("Please enter a valid email address.") //verifies the submission field value is provided in an email format
        .min(3, "Please enter your full email address") 
        .max(255), //restricts the email length to a maximum of 255 characters

        //If any of the above conditions are not met, the error message provided is returned

    enquiryType: z.enum([ //the submission for this field must match exactly one of the values specified in the enum.
        "ONE_TO_ONE_COACHING",
        "BEGINNERS_COURSE",
        "GENERAL_ENQUIRY"
    ]).optional(), //currently optional meaning it can also be undefined

    message: z
        .string() //ensures submission fields value is a string 
        .trim() //removes leading / trailing whitespace
        .max(2000) //cannot exceed 2000 characters in length 
        .optional(), //can be undefined
})
//this is a cross field validation
.superRefine((data, ctx) => { //it receives the entire parsed object (data)
    if(
        data.enquiryType === "GENERAL_ENQUIRY" && (!data.message || data.message.length === 0) //checks a rule which depends upon two fields, if enquiryType is submitted as 'general enquiry' AND the message submission was not provided or empty then a custom validation error is provided on the message field. 
    ) {
        ctx.addIssue({
            code: "custom",
            path: ["message"],
            message: "Please enter your message.",
        })
    }
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
//z.infer creates the TS type automatically, defining this using your ContactFormSchema, keeping them in sync with each other, so it is instead of writing:
/*
    type ContactFormData = {
        fullName: string;
        email: string;
        etc
    };
*/