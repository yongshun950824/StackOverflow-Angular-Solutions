// Import PrimeNG modules
     import { AccordionModule } from 'primeng/accordion';
    import { AutoComplete } from 'primeng/autocomplete';
    import { AvatarModule } from 'primeng/avatar';
    import { AvatarGroupModule } from 'primeng/avatargroup';
    import { BadgeModule } from 'primeng/badge';
    import { BreadcrumbModule } from 'primeng/breadcrumb';
    import { ButtonModule } from 'primeng/button';
    import { CalendarModule } from 'primeng/calendar';
    import { DatePicker } from 'primeng/datepicker';
    import { Carousel } from 'primeng/carousel';
    import { CascadeSelect } from 'primeng/cascadeselect';
    import { ChartModule } from 'primeng/chart';
    import { Checkbox } from 'primeng/checkbox';
    import { Chip } from 'primeng/chip';
    import { ConfirmDialog } from 'primeng/confirmdialog';
    import { ConfirmPopupModule } from 'primeng/confirmpopup';
    import { ColorPicker } from 'primeng/colorpicker';
    import { ContextMenuModule } from 'primeng/contextmenu';
    import { DataView } from 'primeng/dataview';
    import { Dialog } from 'primeng/dialog';
    import { DividerModule } from 'primeng/divider';
    import { DockModule } from 'primeng/dock';
    import { DrawerModule } from 'primeng/drawer';
    import { DragDropModule } from 'primeng/dragdrop';
    import { Select } from 'primeng/select';
    //import { DynamicDialog } from 'primeng/dynamicdialog';
    import { DeferModule } from 'primeng/defer';
    import { EditorModule } from 'primeng/editor';
    import { FieldsetModule } from 'primeng/fieldset';
    import { FileUpload } from 'primeng/fileupload';
    import { FocusTrap } from 'primeng/focustrap';
    import { GalleriaModule } from 'primeng/galleria';
    import { InplaceModule } from 'primeng/inplace';
    import { InputMask } from 'primeng/inputmask';
    import { InputSwitchModule } from 'primeng/inputswitch';
    import { ToggleSwitch } from 'primeng/toggleswitch';
    import { InputTextModule } from 'primeng/inputtext';
    import { InputNumber } from 'primeng/inputnumber';
    import { TextareaModule } from 'primeng/textarea';
    import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
    import { InputGroup } from 'primeng/inputgroup';
    import { InputOtp } from 'primeng/inputotp';
    import { Image } from 'primeng/image';
    import { Knob } from 'primeng/knob';
    import { Listbox } from 'primeng/listbox';
    import { MegaMenuModule } from 'primeng/megamenu';
    import { MenuModule } from 'primeng/menu';
    import { MenubarModule } from 'primeng/menubar';
    import { Message } from 'primeng/message';
    import { MessagesModule } from 'primeng/messages';
    import { MultiSelectModule } from 'primeng/multiselect';
    import { MeterGroup } from 'primeng/metergroup';
    import { OrderList } from 'primeng/orderlist';
    import { OrganizationChartModule } from 'primeng/organizationchart';
    import { OverlayPanelModule } from 'primeng/overlaypanel';
    import { PaginatorModule } from 'primeng/paginator';
    import { PanelModule } from 'primeng/panel';
    import { PanelMenuModule } from 'primeng/panelmenu';
    import { PasswordModule } from 'primeng/password';
    import { PickList } from 'primeng/picklist';
    import { ProgressBar } from 'primeng/progressbar';
    import { RadioButton } from 'primeng/radiobutton';
    import { Rating } from 'primeng/rating';
    import { Scroller } from 'primeng/scroller';
    import { ScrollPanelModule } from 'primeng/scrollpanel';
    import { ScrollTop } from 'primeng/scrolltop';
    import { SelectButton } from 'primeng/selectbutton';
    import { SidebarModule } from 'primeng/sidebar';
    import { Skeleton } from 'primeng/skeleton';
    import { Slider } from 'primeng/slider';
    import { SpeedDialModule } from 'primeng/speeddial';
    import { SplitButton } from 'primeng/splitbutton';
    import { SplitterModule } from 'primeng/splitter';
    import { StepperModule } from 'primeng/stepper';
    import { StepsModule } from 'primeng/steps';
    import { TabMenuModule } from 'primeng/tabmenu';
    import { TableModule } from 'primeng/table';
    import { TabViewModule } from 'primeng/tabview';
    import { Tag } from 'primeng/tag';
    import { Terminal } from 'primeng/terminal';
    import { TieredMenuModule } from 'primeng/tieredmenu';
    import { Timeline } from 'primeng/timeline';
    import { ToastModule } from 'primeng/toast';
    import { ToggleButton } from 'primeng/togglebutton';
    import { ToolbarModule } from 'primeng/toolbar';
    import { TooltipModule } from 'primeng/tooltip';
    import { Tree } from 'primeng/tree';
    import { TreeSelect } from 'primeng/treeselect';
    import { TreeTableModule } from 'primeng/treetable';
    import { AnimateOnScrollModule } from 'primeng/animateonscroll';
    import { CardModule } from 'primeng/card';
    import { BlockUI } from 'primeng/blockui';
    import { ProgressSpinner } from 'primeng/progressspinner';
    import { Ripple } from 'primeng/ripple';
    import { FloatLabel } from 'primeng/floatlabel';
    import { IconField } from 'primeng/iconfield';
    import { InputIcon } from 'primeng/inputicon';
    import { StyleClass } from 'primeng/styleclass';
    import { AutoFocusModule } from 'primeng/autofocus';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { HttpClientModule } from '@angular/common/http';
    import { NgModule } from '@angular/core';
    import { OverlayBadgeModule } from 'primeng/overlaybadge';

    import { ProductService } from '../service/productservice';

    @NgModule({
      imports: [
        AvatarModule,
        AvatarGroupModule,
        AnimateOnScrollModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoComplete,
        BadgeModule,
        BreadcrumbModule,
        BlockUI,
        ButtonModule,
        CalendarModule,
        DatePicker,
        Carousel,
        CascadeSelect,
        ChartModule,
        Checkbox,
        Chip,
        ColorPicker,
        ConfirmDialog,
        ConfirmPopupModule,
        ContextMenuModule,
        DataView,
        Dialog,
        DividerModule,
        DrawerModule,
        DockModule,
        DragDropModule,
        Select,
        //DynamicDialog,
        DeferModule,
        EditorModule,
        FieldsetModule,
        FileUpload,
        FloatLabel,
        FocusTrap,
        GalleriaModule,
        InplaceModule,
        InputMask,
        InputSwitchModule,
        InputTextModule,
        TextareaModule,
        InputNumber,
        InputGroup,
        InputGroupAddonModule,
        InputOtp,
        Image,
        Knob,
        Listbox,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        Message,
        MessagesModule,
        MultiSelectModule,
        MeterGroup,
        OrganizationChartModule,
        OrderList,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickList,
        ProgressSpinner,
        ProgressBar,
        RadioButton,
        Rating,
        SelectButton,
        SidebarModule,
        Scroller,
        ScrollPanelModule,
        ScrollTop,
        Skeleton,
        Slider,
        SpeedDialModule,
        SplitterModule,
        StepperModule,
        SplitButton,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        Tag,
        Terminal,
        TieredMenuModule,
        Timeline,
        ToastModule,
        ToggleButton,
        ToggleSwitch,
        ToolbarModule,
        TooltipModule,
        Tree,
        TreeSelect,
        TreeTableModule,
        CardModule,
        Ripple,
        StyleClass,
        IconField,
        InputIcon,
        AutoFocusModule,
        OverlayBadgeModule
      ],
      exports: [
        AvatarModule,
        AvatarGroupModule,
        AnimateOnScrollModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoComplete,
        BadgeModule,
        BreadcrumbModule,
        BlockUI,
        ButtonModule,
        CalendarModule,
        DatePicker,
        Carousel,
        CascadeSelect,
        ChartModule,
        Checkbox,
        Chip,
        ColorPicker,
        ConfirmDialog,
        ConfirmPopupModule,
        ContextMenuModule,
        DataView,
        Dialog,
        DividerModule,
        DrawerModule,
        DeferModule,
        DockModule,
        DragDropModule,
        Select,
        //DynamicDialog,
        EditorModule,
        FieldsetModule,
        FileUpload,
        FocusTrap,
        GalleriaModule,
        InplaceModule,
        InputMask,
        InputSwitchModule,
        InputTextModule,
        TextareaModule,
        InputNumber,
        InputGroup,
        InputGroupAddonModule,
        InputOtp,
        Image,
        Knob,
        Listbox,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        Message,
        MessagesModule,
        MultiSelectModule,
        MeterGroup,
        OrganizationChartModule,
        OrderList,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickList,
        ProgressSpinner,
        ProgressBar,
        RadioButton,
        Rating,
        SelectButton,
        SidebarModule,
        Scroller,
        ScrollPanelModule,
        ScrollTop,
        Skeleton,
        Slider,
        SpeedDialModule,
        SplitterModule,
        StepperModule,
        SplitButton,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        Tag,
        Terminal,
        TieredMenuModule,
        Timeline,
        ToastModule,
        ToggleButton,
        ToggleSwitch,
        ToolbarModule,
        TooltipModule,
        Tree,
        TreeSelect,
        TreeTableModule,
        CardModule,
        Ripple,
        StyleClass,
        FloatLabel,
        IconField,
        InputIcon,
        AutoFocusModule,
        OverlayBadgeModule
      ],
      providers: [ ProductService ]
    })
    export class ImportsModule {}
    