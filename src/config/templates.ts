export type TemplateId = 'classic' | 'modern';

// 1. Описываем интерфейсы для наших стилей
interface IHeaderStyle {
  bodyClass: string;
  listClass: string;
  bulletClass: string;
  nameClass: string;
}

interface ISectionStyle {
  containerClass: string;
  bodyClass: string;
  titleClass: string;
  lineClass: string;
  listClass: string;
  bulletClass: string;
}

interface ITemplateStyle {
  header: IHeaderStyle;
  section: ISectionStyle;
}

export const TEMPLATE_STYLES: Record<TemplateId, ITemplateStyle> = {
  classic: {
    header: {
      bodyClass: "w-full  flex flex-col items-center text-center",
      listClass: "flex justify-center flex-wrap gap-x-[1.5mm] gap-y-[0.5mm] mt-[2mm] text-gray-950",
      bulletClass: "font-light text-[0.75em] flex items-center gap-x-[1mm] first:before:content-none before:content-['•'] text-gray-950",
      nameClass: "text-[1.5em] font-bold text-gray-950"
    },
    section: {
      containerClass: "mt-[11mm]",
      bodyClass: "w-full flex flex-col",
      titleClass: "text-[1em] font-bold text-gray-950 uppercase tracking-wide",
      lineClass: "w-full h-[1.5px] bg-black mt-[1mm] mb-[2mm]",
      listClass: "flex flex-row flex-wrap gap-[2mm] mb-[10mm]",
      bulletClass: "font-light text-[0.75em] flex items-center justify-center gap-x-[1mm] before:content-['•'] text-gray-950"
    }
  },


  modern: {
    header: {
      bodyClass: "w-full  flex flex-col items-center text-center",
      listClass: "flex justify-center flex-wrap gap-x-[1.5mm] gap-y-[0.5mm] mt-[2mm] text-gray-950",
      bulletClass: "font-light text-[0.75em] flex items-center gap-x-[1mm] first:before:content-none before:content-['•'] text-gray-950",
      nameClass: "text-[1em] font-bold text-gray-950"
    },
    section: {
      containerClass: "w-full flex flex-col gap-[6mm] mt-[11mm]",
      bodyClass: "w-full flex flex-col",
      titleClass: "text-[1em] font-bold text-gray-950 uppercase tracking-wide",
      lineClass: "w-full h-[1.5px] bg-black mt-[1mm] mb-[2mm]",
      listClass: "flex flex-row flex-wrap gap-[2mm]",
      bulletClass: "font-light text-[0.75em] flex items-center justify-center gap-x-[1mm] before:content-['•'] text-gray-950"
    }
  },
};