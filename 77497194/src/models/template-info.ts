export interface TemplateInfo {
  name: string;
  customFields: CustomFields;
}

export interface CustomFields {
  listCustomFields: ListCustomField[];
  textCustomFields: TextCustomField[];
}

export interface ListCustomField {
  name: string;
  value: string;
}

export interface TextCustomField {
  name: string;
  value: string;
}
