import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

const ReviewSection = () => {
  return (
    <section className=" mt-10 mb-10 gap-20  ">
      <Swiper navigation>
        <SwiperSlide>
          <div className="grid grid-cols-2  gap-20 mx-10">
            <div>
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="">
                    As Co-founders, we had zero clue on the real time stock
                    levels in our warehouse. It felt like a battle to manually
                    update invoices from EE to Zoho, so that at least some data
                    points can be tracked. While we had already implemented{" "}
                    <span className="cursor-pointer underline m-1">Crest</span>{" "}
                    I had no clue that they could make this API integration work
                    for us and exactly the way we wanted it to work. Thank you
                    team
                    <span className="cursor-pointer underline m-1">
                      Rahul Vishwakarma & Yogesh Byahatti
                    </span>
                    for identifying the problem and being so quick with the
                    solution, kudos to the amazing team you have.
                  </div>
                  <div></div>

                  <div className=" gap-4 mt-20 flex justify-between  ">
                    <img
                      className="rounded-full"
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg"
                      alt="ReviwerPhoto"
                    />
                    <div className="flex flex-col justify-center">
                      <p className=" font-semibold text-xs text-slate-800 sm:text-3xl">
                        Kriti Goyal
                        <p className=" mx-1 text-xs font-semibold text-slate-600">
                          Co-founder,P-TAL
                        </p>
                      </p>
                    </div>
                    <div>
                      <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg" />
                    </div>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6"></footer>
              </blockquote>
            </div>
            <div>
              <img
                className="rounded-3xl"
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp"
                alt="Reviwer's Brand"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewSection;
