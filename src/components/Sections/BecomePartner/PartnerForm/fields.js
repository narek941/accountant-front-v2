export const becomePartnerFields = {
  name: {
    name: 'name',
    label: 'full_name',
    placeholder: 'full_name',
    required: true,
  },
  phoneNumber: {
    name: 'phoneNumber',
    label: 'phone_number',
    placeholder: '+374',
    required: true,
  },
  email: {
    name: 'email',
    label: 'email',
    placeholder: 'email',
    required: true,
  },
  tin: {
    name: 'tin',
    label: 'tin',
    placeholder: 'tin',
  },
  organizationName: {
    name: 'organizationName',
    placeholder: 'organization_name',
    label: 'organization_name',
  },
  organizationType: {
    name: 'organizationType',
    label: 'organization_kind',
    options: ['sp', 'ltd', 'ojsc', 'cjsc', 'other'],
  },
  taxType: {
    name: 'taxType',
    label: 'tax_type',
    options: [
      'vat_corporate_tax',
      'turnover_tax',
      'micro_enterprise',
      'excise_tax',
      'other',
    ],
  },
  address: {
    name: 'address',
    label: 'address',
    placeholder: 'baghramyan',
  },
  quantityOfEmployees: {
    name: 'quantityOfEmployees',
    placeholder: '0',
    label: 'number_of_employees',
    required: true,
  },
  activityDescription: {
    name: 'activityDescription',
    placeholder: 'activity_description_placeholder',
    label: 'activity_description',
    required: true,
  },
};

export const becomePartnerScheme = Object.keys(becomePartnerFields);
