images = {
    aaa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACQCAYAAAC/HCaIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3QTVGRUJFRjU1NzExRTk4OThCQ0UyMUIzRDk0RENCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3QTVGRUJGRjU1NzExRTk4OThCQ0UyMUIzRDk0RENCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzdBNUZFQkNGNTU3MTFFOTg5OEJDRTIxQjNEOTREQ0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzdBNUZFQkRGNTU3MTFFOTg5OEJDRTIxQjNEOTREQ0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7SC6DAAAAJIUlEQVR42uzd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",
    aa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACQCAYAAAAV+rcdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNFOEY1QTU2RjU1NzExRTk4MDYwREFGNjFCMDlBMjVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNFOEY1QTU3RjU1NzExRTk4MDYwREFGNjFCMDlBMjVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0U4RjVBNTRGNTU3MTFFOTgwNjBEQUY2MUIwOUEyNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U4RjVBNTVGNTU3MTFFOTgwNjBEQUY2MUIwOUEyNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sx5U0AAAGVUlEQVR42uzd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",
    a: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MEZFNjc4RjU1NzExRTlBOEVFRjNBNEQ4N0E2RkMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MEZFNjc5RjU1NzExRTlBOEVFRjNBNEQ4N0E2RkMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgwRkU2NzZGNTU3MTFFOUE4RUVGM0E0RDg3QTZGQzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgwRkU2NzdGNTU3MTFFOUE4RUVGM0E0RDg3QTZGQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sbzAyAAADI0lEQVR42uzd0UobQRSAYbEXmkDN62gqVR+5d8U7fRFfoPdCKdgJGAqhSjKzOzNn9vvhPECynxszuzv5cqaP2qT5keYlza80f7wlOgXPU5q3NK9pvqVZeVt0LJ7ndzxvEKkUD0QqxgORivFApGI8EKkYD0QqxgMRPMV4IIJnsoEIHojUDg9E8ECk9nggggcitccDUfCuOsADETwQwQORBsBziGjtcMFTgugWInggggcieGLigQgeiOCBCB6IBA9E8EAED0TwQKR/bRaMx7UzeCBq2SM4EJX0kOY3OO4nym0FEUQQQdS8NUQQQQQRRBBBBJEggggiiCDqGtEWIoggOlgQ3J1a72Z4URANjmiP5/X9ID9ABFEOnv2LggiibDwQQVSMByKIivFABFExHojaIbrpEVEOHoggKsYD0cIRTYEHooVeO5sSD0QLQzQHHogWgmhOPIeI1hBVRXQxAh6I2iG6nhNRTTwQDYaoBR6IBkHUEg9EwRH1gAeioIh6wgNRMEQ94oEoCKKe8UDUFtHlCHggansB9nIEPDUQ3UF0PKKIeOZGtILoOESR8UDUAaJtcDyHiOZYhb+H6P+Izs+kCf7Ctj7CnH1K/w+Kigiejr6JRUM059d4eDLXgqIgspDYGZ5IiODp9FJGBETwdHrmiYAIniB4elylhicYnp4QwRMUTw+I4AmOpyUieAbB0wIRPIPhqYkInvp4bmvgqYHI5gpt8FT/PVbbu8DTFSJ4FoZnSkTwLBTPFIjgWTieEkTwwJONCJ42u5B1i+cURPDAk41od3DvZ8DjHuZOt/OdEhE88Jx8YPc3pcEDTxGi7/DA0xtMeOCBBx54esHjN+PhgQceeOCBBx54BA888MADDzzRgufj57bgOaJHYNo89DdKmzTP4MADETwQwQMRPBAtBhE8EMEDETzDdpXmyQqzIIIHInggggeicIjggQgeiOBRIEQe+oMIHojgUSBE8EAED0T1EcEDETyqj8g6z+B9nRERPBDBo/qI4IEIHtVHBI+yEcGjbER2yVA2Io/eKBsRPMpGBI+yEcGjrHbXzn7C83l/BRgAezhEuPoii34AAAAASUVORK5CYII=",
    r: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAB2CAYAAAAnWxonAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4RUZFN0U2RjU1NzExRTlBOTQzQkUxNDJCNjlBODA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4RUZFN0U3RjU1NzExRTlBOTQzQkUxNDJCNjlBODA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThFRkU3RTRGNTU3MTFFOUE5NDNCRTE0MkI2OUE4MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThFRkU3RTVGNTU3MTFFOUE5NDNCRTE0MkI2OUE4MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6v4BtDAAAJpElEQVR42uyd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",
    f: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2MjhGNUIzRjU1NzExRTlCMzNCODZERkE3MUI1NUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2MjhGNUI0RjU1NzExRTlCMzNCODZERkE3MUI1NUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDYyOEY1QjFGNTU3MTFFOUIzM0I4NkRGQTcxQjU1RTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDYyOEY1QjJGNTU3MTFFOUIzM0I4NkRGQTcxQjU1RTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5y+C+bAAAGGklEQVR42uzd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"
}

pagecss = `
.page::after {
    counter-increment: pages;
    content: counter(pages);
}

`

scribecss = `
.pf-trait {
    font-family: 'ff-good-web-pro-condensed', 'Open Sans Condensed', sans-serif;
    background: #5d0000;
    color: #fff;
    border-color: #d8c384;
}

.pf-trait-edge {
    background-color: #d8c384;
    width: 3px;
    display: inline-block;
}

.pf-traits {
    background: #d8c384;
}

.pf-trait-size {
    background: #3a7a58;
}

.pf-trait-align {
    background: #566193;
}

.pf-trait-rare {
    background: #002564;
}

.pf-trait-uncommon {
    background: #98503c;
}

.pf-trait-unique {
    background: #54166d;
}

.pf-trait-type {
    background: #004316;
}

.content h1,
.title h1,
.head h1,
.head h2,
.head h3,
.head h4,
.head h5,
.head h6,
.info h1,
.info h3 {
    font-family: 'Taroca';
    margin-bottom: -0.5rem;
}

.content h1 {
    color: #002564;
}

.title h1 {
    font-family: 'Taroca';
}

.title h1 {
    color: #D8C384;
    background: #5D0000;
    border-color: #d8c384;
}

.head h3,
.head h4 {
    color: #002564;
}

.content h2,
.content h3,
.content h4,
.left h1,
.right h1 {
    font-family: 'gin';
}

.content h4 {
    background: #002564;
    color: #EDE3C7;
    position: relative;
    font-size: 1.1rem;
    padding: 0.3rem 0 0.25rem 0.5rem;
    border-radius: 0.75rem 0.75rem 0 0;
    letter-spacing: 0.75px;
}
.content h4::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 1.9rem;
    background: transparent;
    width: 100%;
    display: block;
    border-bottom: 1px solid #002564;
}
.content p,
.content li {
    font-family: 'linotype-sabon';
}

.right p,
.right ul,
.right li,
.right ol,
.right h2 {
    font-family: 'ff-good-web-pro';
}

.content h2 {
    color: #5D0000;
}

.content h3 {
    color: #A76652;
}

.item h1,
.item h2,
.item h3,
.right h3,
.left h3,
.content h5 {
    font-family: 'ff-good-web-pro-condensed';
}

.item,
.note,
.info {
    font-family: 'ff-good-web-pro';
}

.note {
    background: #D1C7B1;
}

.note h1,
.note h2,
.note h3,
.note h4,
.note h5,
.note h6 {
    font-family: 'ff-good-web-pro';
}

.head {
    color: #5D0000;
}

.head p {
    font-family: 'linotype-sabon';
}

.info {
    background: #5D0000;
    color: #fff;
}

.info h3 {
    color: #D8C384;
    font-variant-ligatures: no-common-ligatures;
}

.info h4,
.info h6 {
    font-family: 'gin';
}

.info h2,
.info h5,
.item h4,
.item h5,
.item h6 {
    font-family: 'ff-good-web-pro';
}

.info em {
    font-family: 'linotype-sabon';
}

.info hr {
    background: #980000;
    border-top-color: #980000;
    border-bottom-color: #980000;
}

.head hr {
    background: #5D0000;
    border-top-color: #5D0000;
    border-bottom-color: #5D0000;
}

.column+.column {
    border-left: 1px solid #F1F0EB;
}

.page thead tr th {
    background: #5D0000;
    color: #fff;
    font-family: 'ff-good-web-pro';
}

.page tbody tr td {
    font-family: 'ff-good-web-pro';
}

.page tbody tr:nth-child(odd) {
    background: #EDE3C7;
}

.page tbody tr:nth-child(even) {
    background: #F4EEE0;
}

.tfoot {
    font-family: 'ff-good-web-pro';
    background: #E6D8B0;
}

.math {
    background: #EAE3D8;
    border-top: 2px solid #E0C9C0;
    border-bottom: 2px solid #E0C9C0;
}

.math p,
.math h1,
.math h2,
.math h3,
.math h4,
.math h5,
.math h6 {
    font-family: 'ff-good-web-pro';
}

.rules {
    background: #F0E8D3;
}

.sample {
    background: #EAE3D8;
}

.sample h1 {
    font-family: 'ff-good-web-pro';
}

.left,
.right {
    color: #5D0000;
}

.left {
    border-right: 1px solid #5D0000;
}

.left p,
.left ol,
.left ul,
.left li,
.left h2 {
    font-family: 'ff-good-web-pro';
}

.right {
    border-left: 1px solid #5D0000;
}

a {
    color: rgb(172, 13, 74);
}

a:hover {
    color: rgb(211, 126, 14);
}

.rules p,
.sample p,
.rules li,
.sample li,
.rules h1,
.rules h2,
.rules h3,
.rules h4,
.rules h5,
.rules h6,
.sample h1,
.sample h2,
.sample h3,
.sample h4,
.sample h5,
.sample h6 {
    font-family: 'ff-good-web-pro';
}
`.trim();

examplemd = `
watermark (
Example of text that appears at the top of every page.
)
title (
Example Entry
)
head (
# Example Entry ((Title))
This is an example of how to use this tool. Imagine that this description is capturing your imagination and bringing you into a world of wonder and excitement. Isn't this great? Look at how fancy this font looks in italics.
-
)

Now let's say that we have some text here. This is some text that I'm writing here for some reason I guess. I don't really know why.

|

Now let's say that we have some text here. This is some text that I'm writing here for some reason I guess. I don't really know why.

/

# Info ((+Info))

This tool allows you to make fancy looking content.

## Editor ((+Editor))

Use the editor on the left side of the screen to create text on the right side of the screen.

### Markdown ((++Markdown))

The editor makes use of **markdown** for a lot of the formatting. A *basic guide* is provided in the help window. Use the menu on the top left to find it.

### Account ((++Account))

You can login using a number of different services. Logging in is handled by the external **auth0** service, and this application does not keep a record of your information. The application uses an unique id from your login to store your data, and that's it.

### Sharing ((++Sharing))

You can share data that you create while logged in. Make sure that sharing is enabled on the document and then the link should allow anyone to view the data, but only the author can make edits and save changes.

### Printing ((++Printing))

Select Print in the top left menu for the best result. To save as a PDF set **Save as PDF** as the Destination, set the Margins to **None**, and enable **Background graphics** in the Options.

### Compatability ((++Compatability))

For the best results use the **Chrome** web browser, or a browser that uses Chromium as a base such as **Vivaldi**. Other browsers may experience issues printing or rendering.

|

# Updates ((+Updates))
Sometimes this application will be updated by the developer. In such cases it's important to read the following text to understand what has changed. The fates are ever shifting.

## Known Issues ((++Known Issues))
* Report issues to hi@pf2.tools
* Export to PDF has been removed.
* To save a PDF, print the document and set the **destination** to **Save as PDF**.

## Version History ((++Version History))
**Version 2.4** (*2021 / 02 / 14*)
* Fixed css print styles
* Screen now uses pt font size
* Page number positions fixed

**Version 2.4** (*2021 / 01 / 17*)
* Page numbers now optional
* Fixed some css issues
* Fixed minor issue with new pages

**Version 2.3**
* Added more formatting options
* Added google font import support
* Added paragraph indenting styling
* Added sticky notes

**Version 2.2**
* Removed the direct PDF export option.
* Instead, Print with destination set as **Save to PDF**.
* Set the **Paper Size** to **A4**.
* Print styles now more accurately match screen.
* Fixed bug which created intermittent server issues.




=

head(
## Formatting ((Formatting))
There are a lot of ways to format your text. All of the different ways to use fancy formatting can be accessed in the menu with the pencil icon.
-
)

It's tough to write a lot of text when I don't really have anything to write about, but it's all for a good cause.

info (
## Columns ((+Columns))
Often you'll want to use two columns in order to shape the text in a more compact way. This makes it easier to parse and less overwhelming to the reader.
## Info Box ((+Info Box))
This is an info box that has white text on a red background. Just thought I should let you know.
)

This is another plain paragraph that exists. That's right. This is a bunch of letters arranged into what are known as words.

rules (
# Something about Rules ((+Rules))
Rules are very important and are a staple of any game. Always remember to include rules in the game, and this box will be useful for pointing out reminders about those rules.
)

Wow this text just keeps on going doesn't it. More help on using markdown can be found in the help button in the menu on the top left.

## Content Header ((+Content Header))

This is what the headers look like in just the normal content area.

### Smaller Header ((+Smaller Header))

This header is even smaller, but it is still trying its best and that should be enough.

### Another Small One

Even though they are small they are great in number which makes them just as intimidating as other headers.

|

note (
# This is a fancy note. ((+Note Box))
Sometimes when there is a bunch of text it's useful to put it into different areas around the page. Maybe someone doesn't need to read this right away but it would be useful to look at after they are finished reading other text. Or maybe they'll just read it first. Who knows!
## Secondary Header
Be sure to check out what each header level has to offer in each context. There aren't styles for every header one through six, but there are usually a couple for each context.
)

Well here we are again. This is some normal text that I want to type out in order to make this look more interesting. I think I'm really finding a good groove here. Writing this paragraph has been a lot easier than the ones before. You can tell by how long it's getting. The next box is usually used for math.

math (
Pizza Modifier = modifier of the dough's key taste score + cheese bonus + other bonuses + penalties
)

When finalizing the pizza modifier value it's important to remember that each topping will change the modifier based on the pizza topping table.

##### Table 1-1: Pizza Modifiers ((+Tables))
Pizza Topping | Modifier
--- | :---:
Onion | +1
Mushroom | +1
Pepperoni | +2
Sausage | +2
Garlic | +3
Pineapple | ?
. * Pineapple is too divisive to have an assigned value.

/

# Column Break ((+Column Break))

You can end a section of multiple columns with the forward slash character on its own line.


|

=

left (
# Left Sidebar ((+Left Sidebar))
Sometimes splitting the page with a sidebar that is about one third of the page wide is necessary.

## Why Though
It isn't known why this practice is so widely used. At some point in history the rule of thirds was discovered and ever since then the number three has been too powerful.

### Another Header
Sometimes the headers should look like this.
)

# Look at This

This section is good. Look at it. Look at all the words that are here. Here you can find many words

## Even More Words

One might think why not just use one of those text generators? That is a good question. One that will be answered in due time.

### Specific Words

It is believed that sometimes using words can be an effective form of communication, and furthermore precisely presenting those words in a coherent manner can be beneficial in maintaining clear intent from which those words arise.

/

-

/

right (
# Right Sidebar ((+Right Sidebar))
Sometimes splitting the page with a sidebar that is about one third of the page wide is necessary.

## Why Though
It isn't known why this practice is so widely used. At some point in history the rule of thirds was discovered and ever since then the number three has been too powerful.

### Another Header
Sometimes the headers should look like this.

* Sometimes you want a longer paragraph that is about a class and it should have a hanging indent, but this isn't always true so that's why it's a bullet point option.
)

# Look at This

This section is good. Look at it. Look at all the words that are here. Here you can find many words

info (
## Something

One might think why not just use one of those text generators? That is a good question. One that will be answered in due time.

|

## Columns

Boy howdy, columns can even be used in here, but you should be careful with them.
)

## More Text 4th

Notice how when using a header followed by a number with a suffix like 'th' it's automatically adjusted to be on the other side of the header. Neat! I think it's neat, anyway.

Uh oh, it appears that I need a little bit more text here in order to really fill out this spot. What a pickle I've gotten myself into. At least I can rest easy that nobody will actually ever read this.

/

#### 1st Level ((+Feat Section))

item(
# Something Cool :a: ((+Feats))
## Feat 3
-
; uncommon,class,feat,trait
**Usage** Typed into the editor window.
-
This feat allows you to type text into the editor and have it appear here. When starting a line with bold text make sure to put two line breaks between so the hanging indent functions properly.

**Critical Success** You are the best.

**Success** You are pretty good.

**Failure** At least you tried.

**Critical Failure** Even though your body and spirit are broken, you will heal with time.
)

|
#### 20th Level

item(
# Look out behind you :r:
## Feat 6
-
; rare,class,feat,trait
**Usage** Typed into the editor window.

**Trigger** You spaced things properly in the item window for the formatting to work.
-
You can put action symbols into here. Look here is a single action :a: wow. And then here's :aa: two actions. Now look out because we're going to :aaa: three actions. How about a :r: reaction? That is a :f: free action!

**Special** This feat is very special. It is so special that it needs some text that says special at the end of it.
)

=

# Other Formatting ((+Other Formatting))
Some other stuff that is helpful to know I think.
/
## Text Style ((++Text Style))
Make sure to remember **how to bold text** and sometimes more importantly *how to italicize*.

## Links ((++Links))
You can also use [links](http://pf2.tools) if you so desire.

## Indent ((++Indent))

What happens if you have some text here and it's just fine on its own. It's just here and there isn't any formatting needed.
    But maybe this line should start indented? When you start a line with spaces it converts the spaces into the starting indent of the paragraph.

## Image ((++Images))
What about an image? Here we go!

![favicon](/favicon.png)

### Hosting
Scribe does not host images. Use [imgur](http://imgur.com) or a similar service to host images.

|

## Item Headers ((++Item Headers))
Sometimes there are entries using the item format that look like this.

item (
# Jennifer Swordslasher
-
### lg female champion
)
What follows is a description of Jennifer.

# Is that Everything?
I hope this covers everything that you need to know. I'm sure there will be more features and things added to this as time goes on. If you have any requests send a message to **hi@pf2.tools** and don't be shy about it!

## Nothing Else
There's not much else to say. I'm just gonna type a little bit more to fill this out just a little bit. I hope that's alright.

### Other Tools
You want to check out other tools? Check out [the monster maker](http://monster.pf2.tools) or how about the [character sheet and campaign tracker](http://character.pf2.tools) or maybe just a simple [text formatter](http://template.pf2.tools). If none of those tickle your fancy, then check out a [a big list with stuff from all over the internet](http://pf2.tools).

=
head(
### Advanced Options ((Advanced))
Only advanced users are able to use the most powerful features...
-
)

## Table of Contents ((+Table of Contents))
A table of contents will be automatically generated if there are any markdown headers that are labeled using double parentheses. Throughout this example are headers that employ this technique. Using the + character at the beginning of the label will indent the links depending on the amount of + characters used. This can organize the links for more clarity.

## Label Links ((+Labels))
Markdown links can point to the same labels that the table of contents uses. For example, [this link](#other-formatting) will return to the Other Formatting section.

## Custom CSS ((+CSS))
Custom styles can be defined in a css block. For example: *The example is only visible in the editor!*

css (
/* css styles go here! */
)

Fonts and colors can be reset to a basic style by inserting the word **reset** on the first line of a document. External assets and images can not be loaded through any css styles.

## Page Numbers ((+Page Numbers))

Page numbers can be enabled by inserting the word **pagenumbers** on a single line of a document. The line will not show in the rendered document.

pagenumbers

## Content Reference ((+References))
Blocks of content can be stored with a key, and then included in other portions of the document. For example:

specialfeat {
item (
# Title
## Feat 5
-
;rare,trait,example
**Requirements** You are really cool.
-
This text can be used elsewhere in the document because it's in the block labeled 'specialfeat' using curly braces. To try this out try editing the text in this feat, and watch it magically change in both spots.
)
}

To have the text reappear elsewhere, insert the key surrounded by double curly braces. For example:

{{specialfeat}}

## Hidden Content ((+Hidden Content))

A single line with only a % character will create a hidden section at the end of the document. Everything past the line with the % will not be rendered, but can be used to store content references. For example, the following reference is stored in the hidden area.

{{hiddencontent}}

### HTML Comments ((++HTML Comments))

You can also hide content in html comments, like so:

<!--
htmlcomment {
    This text is hidden in an html comment! Edit it to watch them all change at once.
}
-->

/
{{htmlcomment}}
|
{{htmlcomment}}
|
{{htmlcomment}}
/

=

## External References ((+External References))

Items created using http://monster.pf2.tools, http://template.pf2.tools, and other scribe entries can be included dynamically by inserting the url to the specific item. The referred item must be set to public in order to be included.
/
For example, the monster found [here](https://monster.pf2.tools/v/9wLXpxm1) can be included:

https://monster.pf2.tools/v/9wLXpxm1
|
In addition, the item found [here](http://template.pf2.tools/v/55582QvF) can be included:

http://template.pf2.tools/v/55582QvF

-

Finally, the scribe entry found [here](https://scribe.pf2.tools/v/wMqTjphx) can be included:

https://scribe.pf2.tools/v/wMqTjphx

Be careful including other scribe documents as styles applied from them could override previously set styles.

/

## Google Fonts ((+Google Fonts))
If you want to take your custom formatting to the extreme, you can import fonts from [Google Fonts](https://fonts.google.com). Add the fonts you want to use in your custom css using the following formatting (which is only visible in the editor.) This example imports the [Roboto](https://fonts.google.com/specimen/Roboto) font with 4 styles. It is then available as a font-family to use in custom css. You can add multiple fonts with each specimen placed on its own line.

fonts(
Roboto:ital,wght@0,400;0,700;1,400;1,700
)

## Sticky Note ((+Sticky Note))
You can add sticky notes to pages to keep track of whatever kind of things sticky notes keep track of!
sticky(50 218
Check this out! A sticky note can
be placed using an X and Y position
which appears relative to the page.
)

sticky(120 218
Think of the possibilities!
)


=

# Ancient Text
For record keeping just in case.

## Older Version History
/
**Version 2.1**
* Creations from pf2.tools can now be included in scribe documents.
* Support for [monsters](https://monster.pf2.tools) or [items](https://template.pf2.tools).
* Other scribe documents can also be included.
* This feature is still experimental so it might break, and minor formatting errors will likely occur.
* See the **External References** section below for more info.

**Version 2.0**
* Adjusted styles.
* Added h3 style for right and left sidebars.
* Added watermark and title options.
* Improved printing styles for printing as PDF.

**Version 1.9**
* Adjusted margins and page size.
* Improved consistency with printing and printing to PDF.
* PDF option will be removed soon. Please use **Print**, and "Save as PDF" destination instead.

**Version 1.8**
* Fixed issues with printing css to enable better PDF printing

**Version 1.7**
* A4 page preference is now stored as a local option
* Added marker for A4 page height
|
**Version 1.6**
* Added table of contents support
* Added hidden areas
* Added content references
* Viewing entries now auto updates any live changes

**Version 1.5**
* Enabled option for A4 page height

**Version 1.4**
* Cosmetic fixes

**Version 1.3**
* Fixed parenthesis breaking things

**Version 1.2**
* Improved performance for large documents
* Fixed issues with mobile and small browser windows

**Version 1.1**
* Print now summons print window after loading view
* Printing page breaks fixed
* HTML download width is now correct
* PDF resolution and file size greatly reduced
* PDF download background color is now white
* PDF download traits font fixed
* PDF download page breaks fixed

**Version 1.0**
* First public version.
/
%

Everything here is secret. Although clever users will still be able to find it, so don't put anything sensitive here.

hiddencontent {
note(
# Hidden Note from Beyond!
This note is stored in the hidden area, but appears as a reference!
)
}

`.trim();

const showdown = require('showdown')

snippets = {
    action: ':a:',
    'two actions': ':aa:',
    'three actions': ':aaa:',
    reaction: ':r:',
    'free action': ':f:',
    head: 'head (\n# Content Header\nA big header description.\n-\n)\n',
    item: 'item (\n# Name of the Thing\n## Feat 10\n-\n;Trait,Trait,Trait\n**Usage** worn\n-\nA description of the thing.\n)\n',
    note: 'note (\n# Note Box\n)\n',
    rules: 'rules (\n# Rules Box \n)\n',
    sample: 'sample (\n# Sample Box\nThe sample text box.\n**Critical Success** Something happens.\n)\n',
    math: 'math (\nSkill Modifier = Something + Proficiency + Another Thing\n)\n',
    info: 'info (\n# Red Info Box\nThis is some fancy info.\n)\n',
    left: 'left (\n# Left Side\nThis is a side bar that is a third of the page.\n)\n',
    right: 'right (\n# Right Side\nThis is a side bar that is a third of the page.\n)\n',
    watermark: 'watermark (\nDocument watermark.)\n',
    title: 'title (\nDocument Title.)\n',
    page: '\n=\n',
    column: '\n|\n',
    break: '\n/\n',
}

Util = {
    id() {
        return 'idobj' + (
            Number(String(Math.random()).slice(2)) +
            Date.now() +
            Math.round(performance.now())
        ).toString(36);
    }
}

var Entry = function (id = '', name = '', body = '') {
  this.id = id;
  this.tags = [];
  this.body = body
  this.name = name || 'Untitled';
  this.meta = {
    public: 0,
    url: ''
  };
  this.showdown = new showdown.Converter({
    simpleLineBreaks: true,
    ghCompatibleHeaderId: true,
    noHeaderId: true,
    tables: true,
    openLinksInNewWindow: true,
    simplifiedAutoLink: true,
    parseImgDimensions: true,
    strikethrough: true,
    tasklists: true,
    smoothLivePreview: true,
});

  this.metadescription = function() {
    let desc = this.pages().join('\n')
      .replace(/^head.*/gmi, '')
      .replace(/^\).*/gmi, '')
      .replace(/^\w+ *\([\s\S]+?\n\)/gmi, '')

    desc = this.showdown.makeHtml(desc)
      .replace(/<.*?>/gmi, '')
      .trim()
      .substr(0, 160)
      .split(/\n\n/)[0]
      .trim();

    return desc;
  };

  this.pages = function() {
    this.loadcount;
    // console.log('-- Rendering Pages', this.loadcount);

    let self = this;
    let str = this.body.trim();
    str = str.replace(/(\r\n|\n|\r)/gmi, '\n'); // new line nightmare

    let inclimit = 100;

    for (let incs = 0; incs < inclimit; incs++) { // Includes can include other includes...?!
      let m = [...str.matchAll(/^https?:\/\/(.+?)\.pf2\.tools\/v\/(.+?)(?: |$)/gmi)];

      for (let i of m) {
        this.fetchItem(i[0]);
      }

      str = str.replace(/^https?:\/\/.+?\.pf2\.tools\/v\/.+?(?: |$)/gmi, (m) => {
        return self.remotedata[m] || `<div style="padding:0.25em;border:1px dashed #0002"><div style="font-size:10px;text-align:center">loading <a href="${m}" target="_blank">${m}</a></div><div class="mx-auto lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;
      })

      if (!m.length)
        break;
    }



    let resetStyles = str.match(/^reset$/gmi);
    if (resetStyles) {
      str = str.replace(/^reset$/gmi, '');
      this.stylesheet = '';
    }
    else {
      this.stylesheet = scribecss;
    }

    let usePageNumbers = str.match(/^pagenumbers$/gmi);
    if (usePageNumbers) {
      str = str.replace(/^pagenumbers$/gmi, '');
      this.stylesheet += pagecss;
    }

    let cssmatch = [...str.matchAll(/^css *\( *\n([\s\S]+?)\n\)/gmi)];
    for (let i of cssmatch) {
      this.stylesheet += i[1];
    }
    str = str.replace(/^css *\([\s\S]+?\n\)/gmi, '');
    this.stylesheet = this.stylesheet
      .replace(/https?[:\/\w.]+/gmi, '')
      .replace(/{[\s\S]*?}/gmi, (m) => {
        return m.replace(/,/gmi, '##%%##');
      })
      .replace(/(\}*)([^'#;\n]+?)\s*(\{|\,)/gmi, '$1#result $2$3')
      .replace(/\;/gmi, '!important;')
      .replace(/!important!important/gmi, '!important')
      .replace(/#result#result/gmi, '#result')
      .replace(/##%%##/gmi, ',');

    this.watermark = '';
    this.title = '';
    this.bgstyle = '';

    let fontsmatch = [...str.matchAll(/^fonts *\( *\n([\s\S]+?)\n\)/gmi)];
    for (let m of fontsmatch) {
      this.stylesheet = "@import url('https://fonts.googleapis.com/css2?family=" + m[1].split(/\n+/gi).join('&family=') + "&display=swap');\n" + this.stylesheet;
    }
    str = str.replace(/^fonts *\([\s\S]+?\n\)/gmi, '');

    let bgmatch = [...str.matchAll(/^bg *\( *\n([\s\S]+?)\n\)/gmi)];
    for (let m of bgmatch) {
      this.bgstyle = m[1];
    }
    str = str.replace(/^bg *\([\s\S]+?\n\)/gmi, '');

    let watermarkmatch = [...str.matchAll(/^watermark *\( *\n([\s\S]+?)\n\)/gmi)];
    for (let i of watermarkmatch) {
      this.watermark += i[1];
    }
    str = str.replace(/^watermark *\([\s\S]+?\n\)/gmi, '');

    let titlematch = [...str.matchAll(/^title *\( *\n([\s\S]+?)\n\)/gmi)];
    for (let i of titlematch) {
      this.title += i[1];
    }
    str = str.replace(/^title *\([\s\S]+?\n\)/gmi, '');



    let reference = [];
    let refmatch = [...str.matchAll(/^(\w+) *\{([\s\S]+?)\n\}/gmi)]
    for (let i of refmatch) {
      reference.push({
        key: i[1].trim(),
        value: i[2].trim()
      });
    }
    str = str.replace(/^\w+ *\{ *\n/gmi, '').replace(/^\} *\n/gmi, '');

    for (let i of reference) {
      str = str.split('{{' + i.key + '}}').join(i.value);
    }

    str = str.replace(/<!--[\s\S]*?-->/gmi, '');

    str = str.split(/^\%/mi)[0].trim();

    // let toc = [];
    // let tocmatch = [...str.matchAll(/^\#+.+?\(\((\+*)(.+?)\)\)/gmi)];
    // let n = 0;
    // for (let i of tocmatch) {
    //   toc.push({
    //     depth: i[1].length,
    //     match: i[1] + i[2],
    //     key: i[2],
    //     index: n
    //   })
    //   n += 1;
    // }
    // for (let i of toc) {
    //   i.id = i.key.toLowerCase().replace(/\W/gmi, '-');
    //   str = str.replace('((' + i.match + '))', `<a id="toc-${i.id}"></a><a id="toc-${i.id}-${i.index}"></a>`);
    //   // str = str.split('((' + i.match + '))').join(`<a id="toc-${i.id}"></a><a id="toc-${i.id}-${i.index}"></a>`);
    // }

    // this.$root.toc = toc;

    str = str.replace(/\[(.+?)\]\(\#(.+?)\)/gmi, '<a class="pointer" href="#" data-label="$2">$1</a>');



    return str.split(/^(?:\=|page)\s*$/mi).map(o => o.trim());
  }

}
exports.Entry = Entry

// Vue.prototype.ace = ace;
// Vue.prototype.window = window;
// Vue.prototype.showdown = showdown;
// Vue.prototype.images = images;
// Vue.prototype.snippets = snippets;
// Vue.prototype.Util = Util;
// 
// Vue.component('fa', {
//     props: ['icon', 'fw', 's', 'r', 'd', 'l', 'w'],
//     computed: {
//         set() {
//             if (this.r !== undefined)
//                 return 'far'
//             if (this.d !== undefined)
//                 return 'fad'
//             if (this.l !== undefined)
//                 return 'fal'
//             return 'fas'
//         }
//     },
//     template: /*html*/ `
// <i :style="{'w': w + 'px'}" :class="[{'fa-fw': fw !== undefined},'fa-' + icon, set]"></i>
//     `
// });

// Vue.component('modal', {
//     props: ['title', 'id', 'mw', 'subtype', 'static'],
//     template: /*html*/ `
// <div class="modal fade" tabindex="-1" role="dialog" :id="id">
//     <div class="modal-dialog shadow" role="document" :style="{'max-width': mw + 'px'}">
//         <div class="modal-content">
//             <div class="modal-header d-flex align-items-center">
//                 <h5 class="modal-title text-uppercase op-50 flex-grow-1">{{ title }}</h5>
//                 <template v-if="static === undefined">
//                 <button class="btn btn-light-h340" data-dismiss="modal" aria-label="Close">
//                     <fa fw icon="times"/>
//                 </button>
//                 </template>
//             </div>
//             <div class="modal-body">
//                 <slot></slot>
//             </div>
//         </div>
//     </div>
// </div>
//     `
// });

// Vue.component('help', {
//     template: /*html*/ `
// <div>
//     <div class="op-75 text-condensed text-block" v-html="$root.parseMd($root.md['help'])"></div>
// </div>
//     `
// })
// 
// Vue.component('share', {
//     template: /*html*/ `
// <div>
//     <div class="d-flex align-items-center">
//     <div class="flex-even"><div class="px-2 small font-weight-bold" v-if="$root.entry.meta.public"><a target="_blank" :href="$root.location.origin + '/v/' + $root.entry.meta.url ">scribe.pf2.tools/v/{{ $root.entry.meta.url }}</a></div></div>
//     <div class="flex-even"><button class="btn btn-light-h220 text-uppercase font-weight-bold w-100" :class="{'active': $root.entry.meta.public}" @click="$root.entry.meta.public = 1"><fa fw icon="eye"/> sharing enabled</button></div>
//     <div class="flex-even"><button class="btn btn-light-h20 text-uppercase font-weight-bold w-100" :class="{'active': !$root.entry.meta.public}" @click="$root.entry.meta.public = 0"><fa fw icon="eye-slash"/> sharing disabled</button></div>
//     </div>
//     <div class="small op-50 p-2" v-html="$root.parseMd($root.md['share'])"></div>
// </div>
//     `
// })
// 
// Vue.component('settings', {
//     template: /*html*/`
//     <div>
//     <div class="d-flex align-items-center">
//     <div class="text-right flex-even p-1">Export Background Color</div>
//     <div class="flex-even p-1">
//     <div class="d-inline-block">#</div>
//     <div class="d-inline-block"><input placeholder="ffffffff" class="form-control form-control-sm text-monospace w-100" v-model="$root.localsettings.exportbg"></div>
//     </div>
//     <div class="flex-even p-1" :style="'background: #' + ($root.localsettings.exportbg || 'fff')">
//     &nbsp;
//     </div>
//     </div>
// 
//     <div class="d-flex align-items-center">
//     <div class="text-right flex-even p-1">Force A4 Page Height</div>
//     <div class="text-right flex-even p-1">
//         <button class="btn btn-light-h220 text-uppercase w-100 text-center font-weight-bold" @click="$root.options.a4 = true" :class="$root.options.a4 ? '' : 'op-25'"><fa fw icon="check"/> Enabled</button>
//     </div>
//     <div class="text-right flex-even p-1">
//         <button class="btn btn-light-h10 text-uppercase w-100 text-center font-weight-bold" @click="$root.options.a4 = false" :class="$root.options.a4 ? 'op-25' : ''"><fa fw icon="times"/> Disabled</button>
//     </div>
// 
//     </div>
//     </div>
// 
//     </div>
//     `
// })
// 
// Vue.component('printing', {
//     template: /*html*/ `
// <div>
// Printing Settings
// 
// PDF
// Set margins to none. Turn on background images.
// 
// Paper
// Turn off background images.
// </div>
// `
// });
// 
// Vue.component('account', {
//     data() {
//         return {
//             confirmDelete: ''
//         }
//     },
//     template: /*html*/ `
// <div>
//     <div class="p-1 mb-2">
//     <h5 class="text-uppercase">Entries</h5>
//     <div v-for="e of $root.entries" class="text-condensed"><fa fw icon="file"/> {{ e.name || 'Untitled'}}</div>
//     </div>
//     <div class="p-1 mb-2">
//     <h5 class="text-uppercase">Actions</h5>
//     <button class="btn text-uppercase btn-light-h220 font-weight-bold"><fa fw icon="file-plus"/> new</button>
//     </div>
//     <div class="p-1">
//     <h5 class="text-uppercase">Delete Account</h5>
//     <div class="d-flex align-items-center">
//     <div class="flex-even small">Type delete here to confirm:</div>
//     <div class="flex-even"><input class="form-control text-uppercase text-h10-main" v-model="confirmDelete"></div>
//     <div class="flex-even"><button v-if="confirmDelete.toLowerCase() == 'delete'" class="btn text-uppercase btn-light-h10 font-weight-bold w-100" @click="terminateData"><fa fw icon="trash"/>delete account</button></div>
//     </div>
// </div>
// </div>
//     `
// })
// 
// Vue.component('delete', {
//     template: /*html*/ `
// <div>
//     <p>Are you sure? This action cannot be undone.</p>
//     <div>
//     <button class="btn btn-light-h10 text-uppercase font-weight-bold w-100 mt-2" @click="$root.deleteData"><fa fw icon="trash"/>delete entry</button>
//     </div>
// </div>
//     `
// })
// 
// Vue.component('toc', {
//     data() {
//         return {
//             toc: []
//         }
//     },
//     computed: {
//         content() {
//             return this.$root.toc;
//             let result = [];
//             return result;
// 
//             let body = this.$root.entry.body.trim().replace(/item *\([\s\S]+?\)/gmi, '');
//             let lines = this.$root.entry.body.trim().split(/\n/);
//             let head = false;
//             let item = false;
//             for (let i of lines) {
//                 if (!i)
//                     continue;
//                 if (i.match(/^head *\(/gmi)) {
//                     head = true;
//                 }
//                 if (i.match(/^item *\(/gmi)) {
//                     item = true;
//                 }
//                 if (i.match(/^\)/gmi)) {
//                     head = false;
//                     item = false;
//                 }
//                 let match = [...i.matchAll(/^(\#+) *(.*)$/gmi)];
//                 if (match.length) {
//                     let m = match[0];
//                     if (m[1].length < 3)
//                         result.push({
//                             id: m[2].toLowerCase().replace(/\W/, ''),
//                             text: m[2],
//                             head: head,
//                             item: item,
//                             normal: !head && !item,
//                             level: m[1].length - 1
//                         })
//                 }
//             }
// 
//             return result;
//         }
//     },
//     template: /*html*/`
// <div class="p-1">
// <div class="text-uppercase font-weight-bold mb-2 text-title op-50 pointer" @click="$root.goto()">table of contents</div>
// <div v-for="i of content" class="mb-2 text-title" :style="'padding-left: ' + i.depth + 'rem'">
// <a @click="$root.goto(i.id + '-' + i.index)" class="pointer" :class="i.depth === 0 ? 'font-weight-bold' : ''" :style="i.depth === 0 ? 'font-size: 1.2rem' : ''">{{i.key}}</a>
// </div>
// <div style="height: 20px"></div>
// </div>
//     `
// })
// 
// Vue.component('scribe-page', {
//     props: ['i'],
//     template: /*html*/ `
// <div v-html="$root.html(i)"></div>
// `
// });

// vm = new Vue({
//     el: '#app',
//     data: {
//         bigError: '',
//         loadcount: 0,
//         watermark: '',
//         title: '',
//         stickies: [],
//         editor: null,
//         input: '',
//         targetId: '',
//         stylesheet: '',
//         md: {},
//         isLoaded: 0,
//         toc: [],
//         entries: [],
//         options: {
//             a4: false
//         },
//         example: new Entry('ex', 'Example', examplemd),
//         route: '',
//         home: 'edit',
//         modalId: '',
//         cssdata: null,
//         loadedtext: examplemd,
//         location: window.location,
//         remotedata: {},
//         bwp: 0,
//         bgstyle: '',
//         tag: '',
//         filtername: '',
//         tagfilter: [],
// 
//         pendingfetches: 0,
//         completedfetches: 0,
// 
//         localsettings: {
//             exportbg: ''
//         },
//     },
//     computed: {
//         isGuest() {
//             return !_user.sub;
//         },
//         alltags() {
//             let tags = [...this.tagfilter];
//             for (let m of this.entries) {
//                 if (m.tags)
//                     tags.push(...m.tags);
//             }
//             tags = _.uniq(tags.map(o => o.toLowerCase())).sort();
//             return tags;
//         },
//         filtered() {
//             let entries = [];
//             if (this.tagfilter.length) {
//                 entries = this.entries.filter(m => _.intersection(m.tags, this.tagfilter).length);
//             }
//             else {
//                 entries = this.entries;
//             }
//             if (this.filtername) {
//                 entries = entries.filter(m => m.name.toUpperCase().includes(this.filtername.toUpperCase()));
//             }
//             return _.sortBy(entries, m => m.name.toLowerCase(), 'desc');
//         },
//         entry() {
//             if (!this.targetId) {
//                 this.example.body = examplemd;
//                 this.example.name = 'Example';
//                 this.input = examplemd;
//             }
// 
//             return this.entries.find(e => e.id == this.targetId) || this.example;
//         },
//         pages() {
//             if (!this.entry)
//                 return [];
// 
//             this.loadcount;
//             // console.log('-- Rendering Pages', this.loadcount);
// 
//             let self = this;
//             let str = this.entry.body.trim();
//             str = str.replace(/(\r\n|\n|\r)/gmi, '\n'); // new line nightmare
// 
//             let inclimit = 100;
// 
//             for (let incs = 0; incs < inclimit; incs++) { // Includes can include other includes...?!
//                 let m = [...str.matchAll(/^https?:\/\/(.+?)\.pf2\.tools\/v\/(.+?)(?: |$)/gmi)];
// 
//                 for (let i of m) {
//                     this.fetchItem(i[0]);
//                 }
// 
//                 str = str.replace(/^https?:\/\/.+?\.pf2\.tools\/v\/.+?(?: |$)/gmi, (m) => {
//                     return self.remotedata[m] || `<div style="padding:0.25em;border:1px dashed #0002"><div style="font-size:10px;text-align:center">loading <a href="${m}" target="_blank">${m}</a></div><div class="mx-auto lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;
//                 })
// 
//                 if (!m.length)
//                     break;
//             }
// 
// 
// 
//             let resetStyles = str.match(/^reset$/gmi);
//             if (resetStyles) {
//                 str = str.replace(/^reset$/gmi, '');
//                 this.stylesheet = '';
//             }
//             else {
//                 this.stylesheet = scribecss;
//             }
// 
//             let usePageNumbers = str.match(/^pagenumbers$/gmi);
//             if (usePageNumbers) {
//                 str = str.replace(/^pagenumbers$/gmi, '');
//                 this.stylesheet += pagecss;
//             }
// 
//             let cssmatch = [...str.matchAll(/^css *\( *\n([\s\S]+?)\n\)/gmi)];
//             for (let i of cssmatch) {
//                 this.stylesheet += i[1];
//             }
//             str = str.replace(/^css *\([\s\S]+?\n\)/gmi, '');
//             this.stylesheet = this.stylesheet
//                 .replace(/https?[:\/\w.]+/gmi, '')
//                 .replace(/{[\s\S]*?}/gmi, (m) => {
//                     return m.replace(/,/gmi, '##%%##');
//                 })
//                 .replace(/(\}*)([^'#;\n]+?)\s*(\{|\,)/gmi, '$1#result $2$3')
//                 .replace(/\;/gmi, '!important;')
//                 .replace(/!important!important/gmi, '!important')
//                 .replace(/#result#result/gmi, '#result')
//                 .replace(/##%%##/gmi, ',');
// 
//             this.watermark = '';
//             this.title = '';
//             this.bgstyle = '';
// 
//             let fontsmatch = [...str.matchAll(/^fonts *\( *\n([\s\S]+?)\n\)/gmi)];
//             for (let m of fontsmatch) {
//                 this.stylesheet = "@import url('https://fonts.googleapis.com/css2?family=" + m[1].split(/\n+/gi).join('&family=') + "&display=swap');\n" + this.stylesheet;
//             }
//             str = str.replace(/^fonts *\([\s\S]+?\n\)/gmi, '');
// 
//             let bgmatch = [...str.matchAll(/^bg *\( *\n([\s\S]+?)\n\)/gmi)];
//             for (let m of bgmatch) {
//                 this.bgstyle = m[1];
//             }
//             str = str.replace(/^bg *\([\s\S]+?\n\)/gmi, '');
// 
//             let watermarkmatch = [...str.matchAll(/^watermark *\( *\n([\s\S]+?)\n\)/gmi)];
//             for (let i of watermarkmatch) {
//                 this.watermark += i[1];
//             }
//             str = str.replace(/^watermark *\([\s\S]+?\n\)/gmi, '');
// 
//             let titlematch = [...str.matchAll(/^title *\( *\n([\s\S]+?)\n\)/gmi)];
//             for (let i of titlematch) {
//                 this.title += i[1];
//             }
//             str = str.replace(/^title *\([\s\S]+?\n\)/gmi, '');
// 
// 
// 
//             let reference = [];
//             let refmatch = [...str.matchAll(/^(\w+) *\{([\s\S]+?)\n\}/gmi)]
//             for (let i of refmatch) {
//                 reference.push({
//                     key: i[1].trim(),
//                     value: i[2].trim()
//                 });
//             }
//             str = str.replace(/^\w+ *\{ *\n/gmi, '').replace(/^\} *\n/gmi, '');
// 
//             for (let i of reference) {
//                 str = str.split('{{' + i.key + '}}').join(i.value);
//             }
// 
//             str = str.replace(/<!--[\s\S]*?-->/gmi, '');
// 
//             str = str.split(/^\%/mi)[0].trim();
// 
//             let toc = [];
//             let tocmatch = [...str.matchAll(/^\#+.+?\(\((\+*)(.+?)\)\)/gmi)];
//             let n = 0;
//             for (let i of tocmatch) {
//                 toc.push({
//                     depth: i[1].length,
//                     match: i[1] + i[2],
//                     key: i[2],
//                     index: n
//                 })
//                 n += 1;
//             }
//             for (let i of toc) {
//                 i.id = i.key.toLowerCase().replace(/\W/gmi, '-');
//                 str = str.replace('((' + i.match + '))', `<a id="toc-${i.id}"></a><a id="toc-${i.id}-${i.index}"></a>`);
//                 // str = str.split('((' + i.match + '))').join(`<a id="toc-${i.id}"></a><a id="toc-${i.id}-${i.index}"></a>`);
//             }
// 
//             this.$root.toc = toc;
// 
//             str = str.replace(/\[(.+?)\]\(\#(.+?)\)/gmi, '<a class="pointer" href="#" data-label="$2">$1</a>');
// 
// 
// 
//             return str.split(/^(?:\=|page)\s*$/mi).map(o => o.trim());
//         },
// 
//     },
//     watch: {
//         localsettings: {
//             handler(v) {
//                 localStorage.setItem('localsettings', JSON.stringify(this.localsettings));
//             },
//             deep: true
//         },
//         options: {
//             deep: true,
//             handler(v) {
//                 localStorage.setItem('options', JSON.stringify(this.options));
//             }
//         },
//         input(v) {
//             document.title = this.entry.name || 'PF2e Scribe Tool'
//             if (this.editor) {
//                 if (this.editor.getValue() !== v) {
//                     this.editor.setValue(v, 1);
//                     this.editor.session.getUndoManager().reset();
//                 }
//                 else {
//                     this.entry.body = v;
//                 }
// 
//                 requestAnimationFrame(() => {
//                     requestAnimationFrame(() => {
//                         this.editor.resize(true);
//                     })
//                 })
//             }
//         },
//         targetId(v) {
//             document.title = this.entry.name || 'PF2e Scribe Tool'
//             this.pendingfetches = 0;
//             this.completedfetches = 0;
//             this.input = this.entry.body;
//             this.loadedtext = this.entry.body;
//             if (this.editor) {
//                 this.editor.session.getUndoManager().reset();
//             }
//         },
//         entries: {
//             handler(v) {
//                 this.saveData();
//             },
//             deep: true
//         },
//         route(v) {
//             if (!v) {
//                 this.isLoaded = false;
//                 this.editor = null;
//                 return;
//             }
// 
//             if (v != 'edit') {
//                 this.editor = null;
//             }
// 
//             requestAnimationFrame(() => {
//                 requestAnimationFrame(() => {
//                     if (v == 'edit')
//                         this.mountAce();
//                 })
//             })
//         }
//     },
//     methods: {
//         toggleFilter(id) {
//             if (this.isFilter(id)) {
//                 this.removeFilter(id);
//             }
//             else {
//                 this.addFilter(id);
//             }
//         },
//         addFilter(id) {
//             if (!this.isFilter(id)) {
//                 this.tagfilter.push(id.toLowerCase());
//             }
//         },
//         removeFilter(id) {
//             if (this.isFilter(id)) {
//                 this.tagfilter.splice(this.tagfilter.indexOf(id.toLowerCase()), 1);
//             }
//         },
//         isFilter(id) {
//             return this.tagfilter.includes(id.toLowerCase());
//         },
//         addTag(id) {
//             id = id.trim();
//             if (!id)
//                 return;
//             if (!this.entry.tags)
//                 this.entry.tags = [];
//             if (this.entry.tags.includes(id.toLowerCase()))
//                 return;
//             this.entry.tags.push(id.toLowerCase());
//         },
//         removeTag(id) {
//             this.entry.tags.splice(this.entry.tags.indexOf(id.toLowerCase()), 1);
//         },
//         goto(id) {
//             if (id) {
//                 // console.log(id);
//                 // $(window).scrollTop($('#toc-' + id).offset().top);
//                 // $('#result-scroller').scrollTop();
//                 document.getElementById('toc-' + id).scrollIntoView()
//             }
//             else {
//                 window.scrollTo(0, 0);
//                 document.getElementById('result-scroller').scrollTo(0, 0);
//                 // $(window).scrollTop(0);
//                 // $('#result-scroller').scrollTop(0);
//             }
//         },
//         html(str) {
//             if (!str)
//                 return '';
// 
//             let self = this;
//             let size = ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'];
//             let alignment = ['lg', 'ng', 'cg', 'ln', 'n', 'cn', 'le', 'ne', 'ce'];
//             let type = ['city', 'village', 'metropolis', 'town'];
// 
//             let traitEdge = '<div class="pf-trait pf-trait-edge">&nbsp;</div>';
// 
//             let contentStart = '<div class="content" data-markdown="1">';
//             let contentEnd = '</div>'
// 
//             let columnStart = '<div class="flex-even column" data-markdown="1">';
//             let columnEnd = '</div>';
// 
//             let pageStart = `<div class="bg-paper page d-flex flex-wrap ${this.options.a4 ? ' a4' : ''}" data-markdown="1"><div class="page-overlay"></div>` + columnStart + contentStart;
//             let pageEnd = contentEnd + columnEnd;
// 
//             if (this.watermark)
//                 pageEnd += `<div class="watermark">${this.watermark}</div>`
//             if (this.title)
//                 pageEnd += `<div class="title"><h1>${this.title}</h1></div>`
// 
//             let stickies = [];
//             let stickymatch = [...str.matchAll(/^sticky *\( *(\d+) +(\d+) *\n([\s\S]+?)\n\)/gmi)];
//             for (let i of stickymatch) {
//                 stickies.push({
//                     x: i[1],
//                     y: i[2],
//                     content: i[3]
//                 });
//             }
//             str = str.replace(/^sticky *\([\s\S]+?\n\)/gmi, '');
// 
//             for (let i of stickies) {
//                 pageEnd += `<div style="position:absolute;top:${i.y}mm;left:${i.x}mm" class="sticky">${DOMPurify.sanitize(showdown.makeHtml(i.content))}</div>`
//             }
// 
//             pageEnd += '</div>';
// 
//             let data = str
//                 .replace(/^( +)/gm, (m, p1) => {
//                     let r = '';
//                     for (let i of p1) {
//                         r += '&nbsp;';
//                     }
//                     return r;
//                 })
//                 .replace(/^-+$/gmi, '<hr>\n')
//                 .replace(/^(\w+) *\(([\s\S]+?)\n\)/gmi, (m, p1, p2) => {
//                     p2 = p2.replace(/^(\||col(umn)?)$/gmi, columnEnd + columnStart);
//                     p1 = p1.toLowerCase();
//                     let suffix = '';
//                     if (p1 == 'head') {
//                         suffix = '\n/\n';
//                     }
//                     return `${contentEnd}<div class="${p1} d-flex flex-wrap" data-markdown="1">${columnStart}${p2}${columnEnd}</div>${contentStart}${suffix}`;
//                 })
//                 .replace(/^; *(.*)$/gmi, (m, p1) => {
//                     let result = '<div class="traits">' + traitEdge + '!--';
//                     for (let trait of self.splitTraits(p1)) {
//                         let color = trait;
//                         if (size.includes(trait)) {
//                             color = 'size';
//                         }
//                         if (type.includes(trait)) {
//                             color = 'type';
//                         }
//                         if (alignment.includes(trait)) {
//                             color = 'align';
//                         }
//                         result += `--!<div class="pf-trait pf-trait-${color}">${trait}</div>!--`
//                     }
//                     return result + '--!' + traitEdge + '</div>';
//                 })
//                 .replace(/^\.\s*(.*)$/gmi, '<div class="tfoot">$1</div>')
//                 .replace(/^(\||col(umn)?)$/gmi, contentEnd + columnEnd + columnStart + contentStart)
//                 .replace(/^(\/|break)$/gmi, contentEnd + columnEnd + '<div class="content w-100"></div>' + columnStart + contentStart)
// 
//             data = `${pageStart}${data}${pageEnd}`;
//             data = DOMPurify.sanitize(showdown.makeHtml(data))
//                 .replace(/<p><\/p>/gmi, '')
//                 .replace(/<p><strong>/gmi, '<p class="hang"><strong>')
//                 .replace(/<div data-markdown="1" class="content"><\/div>/gmi, '')
//                 .replace(/!--/gmi, '<!--')
//                 .replace(/--!/gmi, '-->')
//                 .replace(/<hr><br>/gmi, '<hr>')
//                 .replace(/<h2.*?>(.*?) +(\d+[stndrh]{2})<\/h2>/gmi, '<div class="p d-flex"><h2>$1</h2><h2 class="mr-0 my-0 ml-auto">$2</h2></div>')
//                 .replace(/:(aaa|aa|a|r|f):/gmi, (m, p1) => {
//                     return `<img src=${images[p1.toLowerCase()]} class="text-img">`
//                 })
//                 .replace(/\[(aaa|aa|a|r|f)\]/gmi, (m, p1) => {
//                     return `<img src=${images[p1.toLowerCase()]} class="text-img">`
//                 })
// 
//             return data;
//         },
//         splitTraits(str) {
//             let result = [];
//             let special = ['unique', 'rare', 'uncommon', 'lg', 'ng', 'cg', 'ln', 'n', 'cn', 'le', 'ne', 'ce', 'tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'];
//             let arr = str.toLowerCase().split(/\s*,\s*/gmi);
//             for (let t of special)
//                 if (arr.find(i => i == t))
//                     result.push(t);
//             return [...result, ..._.difference(arr, special)];
//         },
//         getPrint(bwp = false) {
//             this.bwp = bwp;
//             this.route = 'print';
//             setTimeout(() => {
//                 window.print();
//             }, 1500);
//         },
//         getPdf() {
//             let bgcolor = this.localsettings.exportbg;
//             if (bgcolor) bgcolor = '#' + bgcolor;
//             else bgcolor = null;
// 
//             let el = document.getElementById('result');
//             el.classList.add("pdf");
//             html2pdf(document.getElementById('result'), {
//                 margin: 0,
//                 filename: (this.entry.name || 'untitled').replace(/[^a-z0-9]/gi, '_').toLowerCase() + '-' + (Math.floor(new Date().getTime() / 1000)) + '.pdf',
//                 html2canvas: { scale: 1.5, useCORS: true, allowTaint: true },
//                 pagebreak: { mode: 'avoid-all', before: '.page+.page' },
//                 image: { type: 'jpeg', quality: 0.9 }
//             });
//             requestAnimationFrame(() => {
//                 requestAnimationFrame(() => {
//                     el.classList.remove("pdf");
//                 })
//             })
//         },
//         getHtml() {
//             let bgcolor = this.localsettings.exportbg;
//             if (bgcolor) bgcolor = '#' + bgcolor;
//             else bgcolor = null;
// 
//             let result = '<html style="background: ' + bgcolor + '"><head><style>' + this.cssdata + this.stylesheet + '</style><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, shrink-to-fit=no"></head><body style="background: #000"><div style="max-width: 800px; margin: 1rem auto" id="result">';
//             result += DOMPurify.sanitize(document.getElementById('result').innerHTML).replace(/\s+/g, ' ').replace(/\n/g, '');
//             result += '</div></body></html>'
// 
//             let element = document.createElement('a');
//             element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
//             element.setAttribute('download', (this.entry.name || 'untitled').replace(/[^a-z0-9]/gi, '_').toLowerCase() + '-' + (Math.floor(new Date().getTime() / 1000)) + '.htm');
// 
//             element.style.display = 'none';
//             document.body.appendChild(element);
// 
//             element.click();
// 
//             document.body.removeChild(element);
//         },
//         parseMd(data) {
//             return DOMPurify.sanitize(showdown.makeHtml(data))
//         },
//         snippet(id) {
//             this.editor.insert(snippets[id]);
//         },
//         newFile() {
//             let self = this;
//             if (this.isGuest) {
//                 let e = new Entry();
//                 e.id = Util.id();
//                 this.entries.push(e);
//                 this.targetId = e.id;
//                 self.route = 'edit';
//             }
//             else {
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'new'
//                 }, function (data) {
//                     if (data.success) {
//                         let entry = new Entry();
//                         let v = data;
//                         entry.id = v.data.id;
//                         entry.meta.public = v.meta.public;
//                         entry.meta.url = v.meta.url;
//                         self.entries.push(entry);
//                         self.targetId = entry.id;
//                     }
// 
//                     if (self.entries.length) {
//                         self.route = 'edit';
//                     }
//                 })
//             }
//         },
//         duplicateFile() {
//             let self = this;
//             let data = JSON.stringify(this.entry);
// 
//             if (this.isGuest) {
//                 let e = new Entry();
//                 e.id = Util.id();
//                 e.body = this.entry.body;
//                 this.entries.push(e);
//                 this.targetId = e.id;
//                 self.route = 'edit';
//             }
//             else {
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'new',
//                     data: data
//                 }, function (data) {
//                     if (data.success) {
//                         this.isLoaded = false;
//                         let entry = new Entry();
//                         let v = data;
//                         entry.id = v.data.id;
//                         entry.body = v.data.body;
//                         entry.meta.public = v.meta.public;
//                         entry.meta.url = v.meta.url;
//                         self.entries.push(entry);
//                         self.targetId = entry.id;
//                     }
// 
//                     if (self.entries.length) {
//                         self.route = 'edit';
//                     }
//                 })
//             }
//         },
//         terminateData() {
//             let self = this;
//             $.post('/r/', {
//                 t: _token,
//                 r: 'terminate',
//             }, function (data) {
//                 window.location.href = window.location.origin + '/logout.php';
//             });
//         },
//         saveData: _.debounce(function () {
//             if (!this.isLoaded) {
//                 this.isLoaded = true;
//                 return;
//             }
//             if (this.entry.id == 'ex')
//                 return;
// 
//             if (this.route != 'edit')
//                 return;
// 
//             localStorage.setItem('backup', JSON.stringify(this.entries));
// 
//             if (this.isGuest) {
//                 localStorage.setItem('data', JSON.stringify(this.entries));
//             }
//             else {
//                 let e = JSON.stringify(this.entry);
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'save',
//                     data: e
//                 }, function (data) {
//                     console.log('-- Entry saved remotely');
//                 })
//             }
//         }, 100),
//         viewData() {
//             let self = this;
//             $.post('/r/', {
//                 t: _token,
//                 r: 'view',
//                 v: _v
//             }, function (data) {
//                 if (data.success) {
//                     let entries = [];
//                     let v = data;
//                     let entry = new Entry();
//                     entry.id = v.data.id;
//                     entry.body = v.data.body || '';
//                     entry.name = v.data.name || '';
//                     entry.tags = [];
//                     entries.push(entry);
//                     self.entries = entries;
//                     self.route = 'view';
//                     self.home = 'view';
//                     self.targetId = entry.id;
// 
//                     if (entry.body) {
//                         document.querySelector('meta[name="description"]').setAttribute("content", self.metadescription);
//                     }
//                     if (entry.name && entry.name.trim()) {
//                         window.history.replaceState(null, '', '/v/' + _v + '-' + entry.name.trim().replace(/[^a-z0-9]+/gi, '-').toLowerCase().replace(/-+$/i, ''));
//                     }
//                 }
//             })
//         },
//         deleteData() {
//             let self = this;
// 
//             if (this.isGuest) {
//                 let id = self.entry.id;
//                 self.entries = self.entries.filter(e => e.id != id);
//                 self.modal('');
//                 if (!self.entries.length) {
//                     self.route = '';
//                     self.newFile();
//                 }
//                 else {
//                     self.targetId = '';
//                 }
//             }
//             else {
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'delete',
//                     file: self.entry.id
//                 }, function (data) {
//                     if (data.success) {
//                         let id = self.entry.id;
//                         self.entries = self.entries.filter(e => e.id != id);
//                         self.modal('');
//                         if (!self.entries.length) {
//                             self.route = '';
//                             self.newFile();
//                         }
//                         else {
//                             self.targetId = '';
//                         }
//                     }
//                 });
//             }
//         },
//         toTitleCase(str) {
//             if (!str)
//                 return '';
//             str = str.toLowerCase();
//             str = str.split(' ');
//             for (let i = 0; i < str.length; i++) {
//                 str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//             }
//             return str.join(' ');
//         },
//         ensureSign(obj) {
//             let str = obj + '';
//             if (str.includes('-') || str.includes('+'))
//                 return str;
//             return '+' + str;
//         },
//         fetchItem(url) {
//             let self = this;
// 
//             const _convertaction = function (a) {
//                 if (a == 'one') return ':a:';
//                 if (a == 'two') return ':aa:';
//                 if (a == 'three') return ':aaa:';
//                 if (a == 'reaction') return ':r:';
//                 if (a == 'free') return ':f:';
//                 return a;
//             }
// 
//             // self.remotedata[url] = '';
// 
//             setTimeout(() => {
//                 console.log('-- Fetching data', url);
//                 self.pendingfetches += 1;
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'fetchdata',
//                     url: url
//                 }, function (data) {
//                     // turn the data into markdwon here
//                     self.completedfetches += 1;
//                     if (!data.data) {
//                         console.log('-- Fetch failed!', url);
// 
//                         if (self.completedfetches >= self.pendingfetches) {
//                             self.pendingfetches = 0;
//                             self.completedfetches = 0;
//                             self.increaseLoadcount();
//                         }
// 
//                         return;
//                     }
//                     let str = '';
//                     let t = '';
//                     let tokens = [];
//                     let i = data.data;
//                     if (url.includes('monster.pf2.tools')) {
//                         str += `# ${i.name}\n## ${i.creature || 'Creature'} ${i.showlevel || i.level}\n-\n`;
//                         str += `;${[i.alignment, i.size, i.type, i.traits].filter(x => x).join(',')}\n`;
//                         if (i.perception.value)
//                             str += `**Perception** ${self.ensureSign(i.perception.value)}\n\n`;
//                         if (i.languages)
//                             str += `**Languages** ${i.languages}\n\n`;
//                         str += `**Skills** `;
// 
// 
//                         tokens = [];
// 
//                         for (let s of ['acrobatics', 'athletics', 'arcana', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'nature', 'occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery']) {
//                             if (i[s].value) {
//                                 t = `${self.toTitleCase(s)}&nbsp;${self.ensureSign(i[s].value)}`;
//                                 if (i[s].note) {
//                                     t += ` (${i[s].note})`
//                                 }
//                                 tokens.push(t)
//                             }
//                         }
// 
//                         for (let s of ['lore', 'lorealt']) {
//                             if (i[s].value) {
//                                 t = `${self.toTitleCase(i[s].name)}&nbsp;${self.ensureSign(i[s].value)}`;
//                                 if (i[s].note) {
//                                     t += ` (${i[s].note})`
//                                 }
//                                 tokens.push(t)
//                             }
//                         }
//                         str += tokens.join(', ');
//                         str += `\n\n`
// 
//                         tokens = [];
// 
//                         for (let s of ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']) {
//                             t = `**${self.toTitleCase(s).slice(0, 3)}**&nbsp;${self.ensureSign(i[s].value)}`;
//                             if (i[s].note) {
//                                 t += ` (${i[s].note})`;
//                             }
//                             tokens.push(t);
//                         }
//                         str += tokens.join(', ');
//                         str += `\n\n`
// 
//                         for (let s of i.specials.filter(o => o.type == 'general')) {
//                             str += `**${s.name}**`
//                             if (s.traits)
//                                 str += ` (${s.traits})`;
//                             str += ` ${self.autoFormat(s.description)}\n\n`
//                         }
// 
//                         if (i.items)
//                             str += `**Items** ${i.items}\n\n`;
// 
// 
// 
//                         str += `\n-\n`;
//                         str += `**AC** ${i.ac.value}`;
//                         if (i.ac.note)
//                             str += ` (${i.ac.note})`;
//                         str += `; `
// 
//                         tokens = [];
// 
//                         for (let s of ['fortitude', 'reflex', 'will']) {
//                             let n = 'Will';
//                             if (s == 'fortitude')
//                                 n = 'Fort';
//                             if (s == 'reflex')
//                                 n = 'Ref';
//                             tokens.push(`**${n}**&nbsp;${self.ensureSign(i[s].value)}`)
//                         }
// 
//                         str += tokens.join(', ');
// 
//                         str += `\n\n**HP** ${i.hp.value}`;
//                         if (i.hp.note)
//                             str += ` (${i.hp.note})`
//                         str += `; `;
// 
//                         tokens = [];
//                         for (let s of ['resistance', 'weakness', 'immunity']) {
//                             if (i[s].value) {
//                                 t = `**${self.toTitleCase(s)}**&nbsp;${i[s].value}`;
//                                 tokens.push(t)
//                             }
//                         }
//                         str += tokens.join('; ');
// 
//                         str += `\n\n`;
// 
//                         for (let s of i.specials.filter(o => o.type == 'defense')) {
//                             str += `**${s.name}** ${_convertaction(s.actions)}`
//                             if (s.traits)
//                                 str += ` (${s.traits})`;
//                             str += ` ${self.autoFormat(s.description)}\n\n`
//                         }
// 
//                         str += `\n-\n`;
// 
//                         str += `**Speed** ${i.speed}\n\n`;
// 
//                         for (let s of i.strikes) {
//                             str += `**${s.type}** :a: ${s.name.toLowerCase()} ${self.ensureSign(s.attack)}`
//                             if (s.traits)
//                                 str += ` (${s.traits})`;
//                             str += `, **Damage** ${s.damage}\n\n`
//                         }
// 
// 
// 
//                         if (i.spelltype) {
//                             str += `**${self.toTitleCase(i.spelltype)} Spells** DC ${i.spelldc.value}`
//                             if (i.spelldc.note)
//                                 str += ` (${i.spelldc.note})`;
//                             str += `, attack ${self.ensureSign(i.spellattack.value)}`;
//                             if (i.spellattack.note)
//                                 str += ` (${i.spellattack.note})`;
//                             str += `;`;
// 
//                             for (let l = 0; l <= 10; l++) {
//                                 if (i.spells[l]) {
//                                     if (l == 10) {
//                                         str += ` **Cantrips (${self.numberSuffix(i.cantriplevel)})** ${self.formatSpells(i.spells[l])}`;
//                                     }
//                                     else {
//                                         str += ` **${self.numberSuffix(10 - l)}** ${self.formatSpells(i.spells[l])}`;
//                                     }
//                                 }
//                             }
// 
//                             if (i.constant)
//                                 str += ` **Constant** ${i.constant}`;
// 
//                             str += `\n\n`
//                         }
// 
//                         for (let s of i.morespells) {
//                             str += `**${self.toTitleCase(s.name)} Spells** DC ${s.spelldc.value}`
//                             if (s.spelldc.note)
//                                 str += ` (${s.spelldc.note})`;
//                             str += `, attack ${self.ensureSign(s.spellattack.value)}`;
//                             if (s.spellattack.note)
//                                 str += ` (${s.spellattack.note})`;
//                             str += `;`;
// 
//                             for (let l = 0; l <= 10; l++) {
//                                 if (s.spells[l]) {
//                                     if (l == 10) {
//                                         str += ` **Cantrips (${self.numberSuffix(s.cantriplevel)})** ${self.formatSpells(s.spells[l])}`;
//                                     }
//                                     else {
//                                         str += ` **${self.numberSuffix(10 - l)}** ${self.formatSpells(s.spells[l])}`;
//                                     }
//                                 }
//                             }
// 
//                             if (s.constant)
//                                 str += ` **Constant** ${s.constant}`;
// 
//                             str += `\n\n`
//                         }
// 
//                         if (i.ritualtype) {
//                             str += `**${self.toTitleCase(i.ritualtype)} Rituals** DC ${i.spelldc.value}; ${i.rituals}\n\n`
//                         }
// 
//                         for (let s of i.specials.filter(o => o.type == 'offense')) {
//                             str += `**${s.name}** ${_convertaction(s.actions)}`
//                             if (s.traits)
//                                 str += ` (${s.traits})`;
//                             str += ` ${self.autoFormat(s.description)}\n\n`
//                         }
// 
//                         str = `item(\n${str}\n)\n${i.description}`
//                     }
//                     else if (url.includes('scribe.pf2.tools')) {
//                         if (i.data)
//                             str += i.data;
//                     }
//                     else {
//                         str += `# ${i.name} ${_convertaction(i.actions)}\n## ${i.type} ${i.level}\n-\n`;
//                         str += `;${i.traits}\n`;
//                         str += `${self.autoFormat(i.body.replace(/\n/g, '\n\n'))}`;
// 
//                         str = `item(\n${str}\n)`
// 
//                     }
// 
//                     if (self.remotedata[url] != str) {
//                         console.log('-- Retrieved', url);
//                         self.remotedata[url] = str;
//                         if (self.completedfetches >= self.pendingfetches) {
//                             self.pendingfetches = 0;
//                             self.completedfetches = 0;
//                             self.increaseLoadcount();
//                         }
//                     }
//                     else {
//                         console.log('-- Unchanged', url);
//                     }
// 
//                 });
//             }, 500);
//         },
//         increaseLoadcount: _.debounce(function () {
//             this.loadcount++;
//         }, 2000),
//         refetch() {
//             this.pendingfetches = 0;
//             this.completedfetches = 0;
//             this.remotedata = {};
//             this.loadcount++;
//         },
//         formatSpells(str) {
//             return '*' + str
//                 .replace(/\(x(\d)\)/g, '(&times;$1)')
//                 .replace(/ *\((.+?)\) */gmi, "* ($1) *")
//                 .replace(/\*\*$/, '') + '*';
//         },
//         autoFormat(str) {
//             str = str
//                 .replace(/Dex Cap/g, 'Dex&nbsp;Cap')
//                 .replace(/^  (\w)/gmi, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1')
//                 .replace(/\(x(\d)\)/g, '(&times;$1)')
//                 .replace(/(^|\n)(Craft Requirements|Ammunition|Duration|Heightened \(.+?\)|Traditions|Cast|Range|Type|Scope and Influence|Goals|Headquarters|Key Members|Allies|Assets|Membership Requirements|Accepted Alignments|Values|Anathema|Access|Special|Routine|Reset|Communication|Destruction|Aspect|Perception|Description|Languages|Skills|Items|Speed|Melee|Ranged|Saving Throw|AC|HP|Speed|Government|Capital|Population|Religions|Irreligious|Primary Exports|Enemies|Factions|Threats|Native Inhabitants|Divinities|Category|Discovery|Influence \d+:|Influence Skills|Background|Appearance|Personality|Penalty|Research Checks|Chase Points|Infiltration Points|Cost|Terrain|Resources|Secrets|Space|Crew|Piloting Check|Hardness|Collision|Special Abilities)/gm, `$1**$2**`)
//                 // .replace(/Bulk/, '**Bulk**')
//                 // .replace(/Area/, '**Area**')
//                 // .replace(/Usage/, '**Usage**')
//                 // .replace(/Targets/, '**Targets**')
//                 // .replace(/\**(Hands|Bulk|Area|Usage|Targets)\**/g, '**$1**')
//                 .replace(/\b\**(Traits|Dex&nbsp;Cap|Strength|Group|Check Penalty|Category|Damage|Source|Price|AC Bonus|Speed Penalty|Hardness|HP \(BT\)|Level|Prerequisites|Frequency|Passengers|Saving Throws|Trigger|Requirements|Effect|Overcome|Maximum RP|Research Points|Will|Fort|Ref|Fortitude|Reflex|Critical Success|Critical Failure|Success|Failure|Maximum Duration|Str|Dex|Con|Int|Wis|Cha|Cantrip|Immunities|Resistances|Weaknesses|Stage \d|\(\d+\D\D\))\**\b/gm, `**$1**`)
//                 .replace(/\((aaa|aa|a|r|f)\)/gmi, `:$1:`)
//                 .replace(/^(.+?) *:(aaa|aa|a|r|f):/gmi, `\n**$1** :$2:`)
//                 .replace(/^(Stealth|Perception|Disable) *(DC.+)/gm, `**$1** $2`)
//                 .replace(/\*+(Fortitude|Reflex|Will)\*+ save/g, '$1 save')
//                 .replace(/\*+(Fortitude|Reflex|Will)\*+;/g, '$1;')
//             // .replace(/\*{3,}/gmi, '**')
//             return str;
//         },
//         loadData() {
//             let self = this;
// 
//             this.options = JSON.parse(localStorage.getItem('options')) || this.options;
// 
//             if (this.isGuest) {
//                 let data = localStorage.getItem('data');
//                 if (data) {
//                     this.entries = JSON.parse(data);
//                 }
//                 else {
//                     // self.newFile();
//                 }
// 
//                 for (let entry of this.entries)
//                     entry.tags = entry.tags || [];
// 
//                 self.route = 'edit';
// 
//             }
//             else {
//                 $.post('/r/', {
//                     t: _token,
//                     r: 'load'
//                 }, function (data) {
//                     if (data.success) {
//                         let entries = [];
//                         for (let e in data.data) {
//                             let v = data.data[e];
//                             let entry = new Entry();
//                             entry.id = e;
//                             entry.body = v.data.body || '';
//                             entry.name = v.data.name || '';
//                             entry.tags = v.data.tags || [];
//                             entry.meta.public = v.meta.public || 0;
//                             entry.meta.url = v.url;
//                             entries.push(entry);
//                         }
//                         self.entries = entries;
//                     }
// 
//                     if (self.entries.length) {
//                         self.route = 'edit';
//                     }
//                     else {
//                         self.newFile();
//                     }
//                 })
//             }
// 
//         },
//         numberSuffix(num) {
//             if (!num) return '';
//             if (num == '1') return num + 'st';
//             if (num == '2') return num + 'nd';
//             if (num == '3') return num + 'rd';
//             return num + 'th'
//         },
//         mountAce() {
//             if (this.editor)
//                 return;
// 
//             let self = this;
//             this.editor = ace.edit("editor");
//             this.editor.setOptions({
//                 fontSize: 12,
//                 showFoldWidgets: false,
//                 theme: "ace/theme/github",
//                 showPrintMargin: false,
//                 copyWithEmptySelection: true,
//                 scrollPastEnd: 0.5,
//                 showLineNumbers: false
//             })
//             this.editor.session.setMode("ace/mode/markdown");
//             this.editor.session.setOptions({
//                 wrap: true
//             })
// 
//             // this.editor.session.on('change', (e) => {
//             //     self.input = self.editor.getValue();
//             // })
// 
//             const db = _.debounce(function (e) {
//                 self.input = self.editor.getValue();
//             }, 250)
// 
//             this.editor.session.on('change', (e) => {
//                 db(e);
//             })
// 
//             this.editor.setValue(this.input, 1);
//             this.editor.session.getUndoManager().reset();
//             this.editor.resize(true);
// 
//         },
//         modal(id) {
//             if (!id) {
//                 $('#modal').modal('hide');
// 
//                 return;
//             }
//             this.modalId = id;
//             $('#modal').modal();
//         }
//     },
//     mounted() {
// 
//         let self = this;
//         if (window.location.search.includes('code=')) {
//             window.history.replaceState('', '', window.location.origin + window.location.pathname);
//         }
//         if (window.location.search.includes('fbclid=')) {
//             window.history.replaceState('', '', window.location.origin + window.location.pathname);
//         }
// 
//         let localsettings = false;
//         try {
//             localsettings = JSON.parse(localStorage.getItem('localsettings'));
//         }
//         catch (e) {
//         }
//         this.localsettings = localsettings || this.localsettings;
// 
//         if (_v) {
//             this.viewData();
//             setInterval(() => {
//                 if (self.route == 'view')
//                     this.viewData();
//             }, 5000)
//         }
//         else {
//             this.loadData();
//         }
// 
//         fetch('/md/license.md')
//             .then(r => r.text())
//             .then(data => {
//                 self.md['license'] = data
//                 self.md = JSON.parse(JSON.stringify(self.md)); // Vue hack
//             });
// 
//         fetch('/md/share.md')
//             .then(r => r.text())
//             .then(data => {
//                 self.md['share'] = data
//                 self.md = JSON.parse(JSON.stringify(self.md)); // Vue hack
//             });
// 
//         fetch('/md/help.md')
//             .then(r => r.text())
//             .then(data => {
//                 self.md['help'] = data
//                 self.md = JSON.parse(JSON.stringify(self.md)); // Vue hack
//             });
// 
//         let css = {
//             '/vendor/font.css': '',
//             '/vendor/bootstrap.min.css': '',
//             '/app/app.css': ''
//         };
//         let count = 0;
//         this.cssdata = '';
//         for (let c in css) {
//             $.get(c, function (data) {
//                 css[c] = data.replace(/\n/g, '').replace(/\s+/g, ' ');
//                 count++;
//                 if (count == Object.keys(css).length) {
//                     for (let key in css) {
//                         self.cssdata += css[key];
//                     }
//                 }
//             });
//         }
// 
//         setInterval(function () {
//             // console.log('-- Ping?')
//             $.post('/r/', {
//                 r: 'ping',
//                 t: _token
//             }, function (data) {
//                 // console.log('-- Pong!');
//                 if (data == '...') {
//                     // Session ended early
//                     self.bigError = "Session expired! Data isn't being saved! Log in again to continue."
//                 }
//             })
//         }, 1000 * 10);
// 
//         $('body').on('click', '[data-label]', function () {
//             let label = ($(this).attr('data-label'));
//             vm.goto(label);
//         })
//     },
//     template: /*html*/ `
// <div style="min-height: 100vh;"> 
// <div class="mx-auto pt-5 lds-roller" v-if="!route"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
// 
// <div v-if="bigError" class="text-center p-3 font-weight-bold text-uppercase" style="font-size: 200%;color:red;background-color:yellow">{{bigError}}</div>
// 
// <div style="min-height: 100vh; min-width: 900px" class="d-flex flex-column" v-if="route == 'edit'"  :style="bgstyle">
//     <div class="d-flex h-100 flex-grow-1">
//         <div class="flex-even shadow" v-if="route == 'edit'">
//             <div class="d-flex flex-column h-100 " style="min-width: 320px">
//                 <div class="bg-light p-1 d-flex align-items-center">
//                     <div class="dropdown">
//                     <button class="btn btn-light-h220" data-toggle="dropdown"><fa fw icon="bars"/></button>
//                     <div class="dropdown-menu">
//                         <button class="btn btn-light-h220 text-uppercase w-100" v-if="_user.sub" @click="modal('account')">{{_user.name || _user.nickname}}</button>
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="newFile" ><fa fw icon="file-plus"/> new</button>
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="duplicateFile"><fa fw icon="copy"/> Duplicate</button>
//                         <button class="btn btn-light-h10 text-uppercase w-100 text-left font-weight-bold" @click="modal('delete')"><fa fw icon="trash"/> delete</button>
//                         <hr class="op-25 my-1">
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="modal('settings')"><fa fw icon="cog"/> settings</button>
//                         <hr class="op-25 my-1">
//                         <button v-if="!isGuest && targetId" class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="modal('share')"><fa fw icon="share-square"/> share</button>
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="getHtml"><fa fw icon="code"/> html</button>
//                         <!--<button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="getPdf"><fa fw icon="file-pdf"/> pdf</button>-->
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="getPrint()"><fa fw icon="print"/> print</button>
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="getPrint(true)"><fa fw icon="adjust"/> print</button>
//                         <hr class="op-25 my-1">
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="modal('help')"><fa fw icon="question"/> help</button>
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" @click="targetId = false"><fa fw icon="align-left"/> example</button>
//                         <hr class="op-25 my-1">
//                         <button class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold"  v-if="_user.sub" @click="modal('account')"><fa fw icon="user-circle"/> account</button>
//                         <a class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" href="logout.php" v-if="_user.sub"><fa fw icon="sign-out-alt"/> logout</a>
//                         <a class="btn btn-light-h220 text-uppercase w-100 text-left font-weight-bold" href="login.php" v-else><fa fw icon="sign-in-alt"/> login</a>
//                     </div>
//                     </div>
// 
//                     <div class="dropdown">
//                     <button class="btn btn-light-h220" data-toggle="dropdown"><fa fw icon="pen"/></button>
//                     <div class="dropdown-menu">
//                         <button v-for="i,k in snippets" class="btn btn-light-h220 w-100 text-left text-uppercase font-weight-bold" @click="snippet(k)"><fa fw icon="plus-square"/> {{k}}</button>
//                     </div>
//                     </div>
// 
//                     <div class="dropdown">
//                     <button class="btn btn-light-h220" data-toggle="dropdown"><fa fw icon="folder-open"/></button>
//                     <div class="dropdown-menu">
//                         <input class="form-control form-control-sm mb-1" placeholder="filter" v-model="filtername">
//                         <div v-if="alltags.length" class="mb-1">
//                         <button class="btn btn-light-h140 btn-sm text-uppercase small" :class="isFilter(tag) ? 'active' : ''" v-for="tag of alltags" @click.stop="toggleFilter(tag)">{{tag}}</button>
//                         </div>
// 
//                         <button v-for="e of _.sortBy(filtered, i => i.name.toUpperCase())" class="btn btn-light-h220 w-100 text-left text-condensed font-weight-bold" @click="targetId = e.id"><fa fw icon="file"/>&nbsp;{{ e.name || 'Untitled' }}</button>
//                     </div>
//                     </div>
// 
//                   
// 
//                     <input v-model="entry.name" class="form-control text-condensed font-weight-bold" placeholder="Untitled" style="max-width:250px">
// 
//                       <div class="dropdown ml-1" v-for="t of entry.tags" :key="'tag'+t">
//                     <button data-toggle="dropdown" class="btn btn-sm btn-light-h140 text-uppercase small">{{t}}</button>
//                     <div class="dropdown-menu p-1" style="width: 50px">
//                         <button class="btn btn-sm btn-light-h20 text-uppercase w-100" @click="removeTag(t)"><i class="fas fa-fw fa-trash"></i> delete tag</button>
//                     </div>
//                     </div>
// 
//                     <input v-model="tag" class="form-control form-control-sm text-condensed text-uppercase ml-1" placeholder="Add Tag" @blur="addTag(tag);tag=''" @keyup.enter="addTag(tag);tag=''" style="max-width:100px" v-if="$root.entry.id != 'ex'">
// 
//                     <div class="ml-auto"></div>
// 
//                     <a v-if="!isGuest && targetId && $root.entry.meta.public" class="small mx-1" :href="$root.location.origin + '/v/' + $root.entry.meta.url" target="_blank">{{window.location.origin}}/v/{{ $root.entry.meta.url }}</a>
//                     <button class="btn btn-light-h220 text-condensed text-uppercase font-weight-bold" @click="modal('share')" v-if="!isGuest && targetId"><fa fw icon="share-square"/></button>
//                     <button class="btn ml-1 btn-light-h220 text-condensed text-uppercase font-weight-bold" @click="refetch()"><fa fw icon="sync-alt"/></button>
// 
//                 </div>
//                 <div id="editor" class="flex-fill bg-paper"></div>
//             </div>
//         </div>
//         <div style="max-height: 100vh; width:200px;margin: 0.25rem;left: 0" class="overflow-scroll hide-mobile" v-if="toc.length">
//             <toc/>
//         </div>
//         <div style="max-height: 100vh" class="mx-auto overflow-scroll flex-even position-relative" id="result-scroller" >
//             <div id="result">
//             <component is="style">{{stylesheet}}</component>
//                 <scribe-page v-for="i,n of pages" :key="'page' + n" :i="i"/>
//             </div>
//             <div class="m-4 small op-50" v-html="parseMd(md['license'])"></div>
//             <div style="height: 100px"></div>
//         </div>
//     </div>
// 
//     <modal id="modal" :title="modalId" mw="640" >
//         <component v-if="modalId" :is="modalId"/>
//     </modal>
// </div>
// <div v-if="route == 'view'" class="position-absolute">
// <button class="btn btn-h220 text-uppercase text-left font-weight-bold m-1 position-fixed print-hide hide-mobile" @click="options.a4 = !options.a4" style="right: 0;top:30px"><span  :class="{'op-25':!options.a4}" >a4</span></button>
//     <button class="position-fixed print-hide btn btn-h220 m-1" style="right: 0" @click="getPrint()"><fa fw icon="print"/></button>
// 
// </div>
// <div v-if="route == 'view'" :style="bgstyle">
//    
//     <div style="max-height: 100vh; width:200px;margin: 0.25rem;left: calc(50% - 608px)" class="overflow-scroll hide-mobile position-fixed" v-if="toc.length">
//         <toc/>
//     </div>
//     <div style="max-height: 100vh; width:150px;margin: 0.25rem;left: 0" class="overflow-scroll hide-desktop position-fixed" v-if="toc.length">
//         <toc/>
//     </div>
//     <div >
//      <div style="font-size:11px" class="mx-auto page-width text-center text-condensed font-weight-bold op-50 print-hide lh-150">
//     This content is not published, endorsed, or approved by Paizo Inc. This content is for personal use only, and may not be used for any infringing, unlawful, or commercial purposes.
//     </div>
//     <div id="result">
//             <component is="style">{{stylesheet}}</component>
//     <scribe-page v-for="i,n of pages" :key="'page' + n" :i="i"/>
//             </div>
//     <div class="mt-4 mx-auto small op-50 print-hide" style="max-width: 800px" v-html="parseMd(md['license'])"></div>
//     </div>
// </div>
// <div v-if="route == 'print'" class="printing" :class="{bwp:bwp}">
//     <button class="position-fixed print-hide btn btn-h220 m-1" style="right: 0" @click="route = home"><fa fw icon="arrow-left"/></button>
//     <button class="position-fixed print-hide btn btn-h220 m-1" style="right: 0;top:30px" @click="window.print()"><fa fw icon="print"/></button>
//     <button class="position-fixed print-hide btn btn-h220 m-1" style="right: 0;top:60px" @click="bwp = !bwp"><fa fw icon="adjust"/></button>
//     <div id="result" >
//             <component is="style">{{stylesheet}}</component>
//     <scribe-page v-for="i,n of pages" :key="'page' + n" :i="i"/>
//             </div>
// </div>
// </div>
//     `
// })
