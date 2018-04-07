import * as React from 'react'

import PageLayout from '../components/PageLayout'
import ContactForm from '../components/form/ContactForm'

const ContactPage = (): JSX.Element => {
  return (
    <PageLayout title="Contact">
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage