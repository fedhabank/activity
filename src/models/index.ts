export interface Entity {
    id: string;
}

/**
 * A generic UI object. 
 * Every UIObject has 
 *  - id
 *  - name
 *  - description
 */
 export type UiObject = {
    id: string;
    name: string;
    description?: string;
}

export interface UiFormFieldOption {
    name: string;
    value: string;
}

export type UiFormField = UiObject & {
    label: string;
    type: string;
    placeholder: string;
    options: UiFormFieldOption[];
}

export type UiForm = UiObject & {
    fields: UiFormField[];
    fieldValues: Record<string, any>;
}

export enum UiWidgetType {
    LIST,
    FORM,
    VIEW,
}

export type UiWidgetObject = UiObject & {
    type: UiWidgetType;
}

export type UiFormWidget = UiWidgetObject & {
    form: UiForm
    type: UiWidgetType.FORM;
}

export type UiListWidget = UiWidgetObject & {
    items: Entity[];
    columns: string[];
    type: UiWidgetType.LIST;
}

export type UiDataViewWidget = UiWidgetObject & {
    items: Entity;
    type: UiWidgetType.VIEW;
}

export type UiWidget = UiFormWidget | UiListWidget | UiDataViewWidget;

export enum UiSectionType {
    HEADER,
    FORM,
    LIST,
    VIEW,
    FOOTER
}

export type UiSection = UiObject & {
    type: UiSectionType;
    widgets: UiWidget[];
}

export enum UiActivityType {
    LIST,
    FORM,
    VIEW
}

export type UiActivity = UiObject & {
    type: UiActivityType;
    sections: UiSection[];
}

export type UiModule = UiObject & {
    parent?: UiModule;
    activities: UiActivity[];
}

export type UiApplication = UiObject & {
    modules: UiModule[];
}
