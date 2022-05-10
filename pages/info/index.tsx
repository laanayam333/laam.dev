import SEO from '@/components/shared/SEO';
import ContactForm from '@/components/forms/ContactForm';

const InfoPage = () => {
  return (
    <main>
      <SEO
        metaTitle="Contact"
        metaDescription="Full the contect form and get in cotact with Luis Anaya for web development project comissions."
      />
      <ContactForm />
    </main>
  );
};

export default InfoPage;
