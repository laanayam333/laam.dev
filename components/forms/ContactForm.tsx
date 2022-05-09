import { useForm, ValidationError } from '@formspree/react';

const formSpreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID!;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(formSpreeId);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <main className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-3">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </main>
  );
};

export default ContactForm;
