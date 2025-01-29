import {Separator} from "@/components/ui/separator";
import Image from 'next/image';

const Footer = () => {

    const quickAccess = ["درباره ما", "وبلاگ", "قوانین", "استخدام", "گزارش مشکل", "حریم خصوصی", "تبلیغات در اسنپ مارکت هایپر", "معرفی فروشگاه‌های اسنپ مارکت", "هایپر"]
    const contactUsData = {
        phone: "02155554425",
        address: "خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه ۳",
        email: "info@snapp.market",
        postalCode: "1967865631"
    }

    return (
        <div className="max-w-[1250px] m-auto pb-10">
            <Separator className="my-7 bg-[#eeeeee]"/>
            <div className="grid grid-cols-5 gap-12">
                <div className="flex flex-col font-medium text-sm/7 color text-[#79808B]">
                    <h5 className="text-black text-base mb-2">درباره ما</h5>
                    <span className="mb-2">
                        اسنپ‌مارکت هایپر حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
                    </span>
                    <span className="text-sm">هایپر استار | مایلی</span>
                </div>
                <div className="flex flex-col font-medium text-sm/7 color text-[#79808B]">
                    <h5 className="text-black text-base mb-2">دسترسی‌ها</h5>
                    <ul>
                        {
                            quickAccess.map((item, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer w-fit"
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col font-medium text-sm/7 color text-[#79808B]">
                    <h5 className="text-black text-base mb-2">تماس با ما</h5>
                    <span>تلفن: {contactUsData.phone}</span>
                    <span>آدرس: {contactUsData.address}</span>
                    <span>ایمیل: {contactUsData.email}</span>
                    <span>کد پستی: {contactUsData.postalCode}</span>
                </div>
                <div className="col-span-2 flex gap-4">
                    <div
                        className="border border-[#eeeeee] rounded-lg p-[1.5rem_1rem] shadow-[0px_0px_0.6rem_rgba(0,0,0,0.16)] mb-[1.5rem] w-fit h-fit">
                        <Image
                            src="/images/footer/union.png"
                            alt="union"
                            width={100}
                            height={50}
                        />
                    </div>
                    <div
                        className="border border-[#eeeeee] rounded-lg p-[1.5rem_1rem] shadow-[0px_0px_0.6rem_rgba(0,0,0,0.16)] mb-[1.5rem] w-fit h-fit">
                        <Image
                            src="/images/footer/union.png"
                            alt="union"
                            width={100}
                            height={50}
                        />
                    </div>
                    <div
                        className="border border-[#eeeeee] rounded-lg p-[1.5rem_1rem] shadow-[0px_0px_0.6rem_rgba(0,0,0,0.16)] mb-[1.5rem] w-fit h-fit">
                        <Image
                            src="/images/footer/union.png"
                            alt="union"
                            width={100}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;