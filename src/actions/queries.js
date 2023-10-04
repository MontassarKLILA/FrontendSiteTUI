import { gql } from "@apollo/client";

export const GET_CUSTOMER_FILE = gql`
query customerFileByName($firstname: String! , $lastname : String!) {
  customerFileByName(firstname: $firstname ,lastname :$lastname ) {
    arrival_date
    departure_date
    check_in_date
    check_out_date
    destination_city
    destination_country
    flight_number
    travel_type
    customer {
      first_name
      last_name
      email
      phone
      address_1
      city
      country
      zipcode
      travel_document
      travel_document_number
    }
    hotel {
      hotel_name
      hotel_description
      stars
      total_capacity
      photos {
        meta_title
        url
        type
      }
    }
  }
}
`;