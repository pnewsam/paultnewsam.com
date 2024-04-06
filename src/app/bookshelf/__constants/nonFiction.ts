type Book = {
  title: string;
  href: string;
};

type Author = {
  name: string;
  books: Book[];
  starred?: boolean;
};

export const nonfictionBooks: Author[] = [
  {
    name: "Charles Petzold",
    books: [
      {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        href: "https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319",
      },
    ],
    starred: true,
  },
  {
    name: "Martin Kleppert",
    books: [
      {
        title: "Designing Data-Intensive Applications",
        href: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_1?crid=134LLVDP5MTXU&dib=eyJ2IjoiMSJ9.eYSNyCNzI789OffQwkZ_mKhHE6xA5jxRDxaLh9kQnbLXrc1_ZIF-skgIUChR5vJ-YcBQTTFE8vFBm0JKI0p5f-zJCewdiwLeWd79AhksdMUyECfGL1n_KNh9EL9-8_k-u1nUjnRqAU-TSW2osiLLWgIPthUincjdDJ47j-a318oEY5-QfHBLyHu3aeK-JZmRsLKGBRvPpLuZSsUUespaDqxzp-AyRA5einqWc1An3rM.nestKnlx47N7xTlv_gIswS2ii7gwqGtFVV6EtOGfyuY&dib_tag=se&keywords=designing+data-intensive+applications&qid=1712171894&sprefix=designing+data%2Caps%2C243&sr=8-1",
      },
    ],
    starred: true,
  },
  {
    name: "Thomas Sowell",
    books: [
      {
        title: "Basic Economics",
        href: "https://www.amazon.com/Basic-Economics-Thomas-Sowell/dp/0465060730/ref=sr_1_1?crid=X0N4VZBX5MW5&dib=eyJ2IjoiMSJ9.iynIkzftFltflZDgWQpR4swkACHNnEVrMKXrCnAcP1Ea8AFyz0uhfolFUG1fgyqc4mxeQypQ74xQLh8dS4zKm7v6SwxdX8PGR535hxNX6ywROoGFGY5nMxKMl4z4JvcrDFOapfkJL0AvI4VPsLWrryEN7zxuSU6dmlJot9mqlsNXYJ3x3Qp_VKGRGYNL5vdWEuizjDYPz5cJD6nUSIHEimavCL1q3kPaa71fFRebkyw.UoMobxr6rIgzuXS6Tb5ZOcTHeRdgumFBQxwqE1eWf20&dib_tag=se&keywords=basic+economics+thomas+sowell&qid=1712172194&sprefix=basic+econmi%2Caps%2C246&sr=8-1",
      },
    ],
    starred: true,
  },
  {
    name: "Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau",
    books: [
      {
        title: "Operating Systems: Three Easy Pieces",
        href: "https://www.amazon.com/Operating-Systems-Three-Easy-Pieces/dp/198508659X/ref=sr_1_1?crid=1MPO6TG4M99T4&dib=eyJ2IjoiMSJ9.5-GwlZ3cTusNxGCER3OR23JCpC98A33ULXgm4aQ2eDMMRFru9GvAbEYYFABZyDi1Z6_Wmsal1Rwl4F8I-YQdr7AhTQC2Bq-G-DMNFbsz4Ml0jbdvMSbnzw7h0kOUuka8xqaOf0rNuGtB7KM4X1I3xHLRPRGgXTmGfpxE1RzvulBgJjYJ2L-ZX28iBZXGmgKYSuSwkAa4rVt-8quO2nBO18il6pNUT7Yg1e-5HOrxOAQ.DXtFs1seJxTt1h-PR4F0pAdWu81zxZ62A7VTiNsALSE&dib_tag=se&keywords=operating+systems&qid=1712173086&sprefix=operating+system%2Caps%2C195&sr=8-1",
      },
    ],
    starred: true,
  },
  {
    name: "Robert Nystrom",
    books: [
      {
        title: "Crafting Interpreters",
        href: "https://www.amazon.com/Crafting-Interpreters-Robert-Nystrom/dp/0990582930/ref=sr_1_9?crid=2TB6CETGI1H3J&dib=eyJ2IjoiMSJ9.4-9SOUtoGVSgkTciTBoZRBS8redCg9G-SDqopD9e4NTgPafyAbWkHV9zPQxuPMmxgwzcOhWiR9w9Hktq0LfR-OUB4z8ibpYCJr2qMgP_e_yvy1C3NaFBq5JF5ZiRHkNMCYlxphATGr9dwOx-o4k7MwSyrgBHxDLXj12i42GcDXCn08oAgBTOcPf-qbNk4ePHLExq6xkLAlKp2wd_Wj8M9h-jMY9sMB087VrK0km6BPEF7xs4ZnZzVdc012beyz5nnsMcA0hHQnVJ0htAmxJsSaIT9M_vN3oLaGTKQk6y5wI.j7Z4Gv1a00og-iKcnbq-yo4WFIFLIyrbWyDQW7Ogyq4&dib_tag=se&keywords=compiler+design&qid=1712173680&sprefix=compiler%2Caps%2C220&sr=8-9",
      },
    ],
    starred: true,
  },
  {
    name: "Arnold Schwarzenegger",
    books: [
      {
        title: "Arnold: The Education of a Bodybuilder",
        href: "https://www.amazon.com/Arnold-Education-Bodybuilder-Schwarzenegger/dp/0671797484/ref=sr_1_1?crid=2Q9R2X3V7YJFV&dib=eyJ2IjoiMSJ9.7dI5Z1Q8zGZ4iZ",
      },
    ],
  },
  {
    name: "Josh Kaufmann",
    books: [
      {
        title: "The Personal MBA",
        href: "https://www.amazon.com/Personal-MBA-10th-Anniversary/dp/0525543023/ref=sr_1_1?crid=3NT4ZOVZ53KFK&dib=eyJ2IjoiMSJ9.xWaz2M7C6hLvbdqUTEGUZ_iisOTVAq66UEu8Gwx4dzTuzjtfVCpFnKuchatXt2WeBDa7xI6QkckfEEnS4CzRSEsG17lwKTidc__Jxkl1WKmoSk8I1Ai2xubxQ0-i79vqxkySO-4HrRWfQchpNnhPxm125fh36BXXZJ1kNUY04OxstTBcuxfZOqhk7-a3KLoHcqB4CH6ZcLRv9hJ5kqc3G4iQY0qtXY101Y3fg9ot3gM.2G5meLJlJpvY2uCI4M9ox9B_m5Rm89q2zB1vIZzUfmE&dib_tag=se&keywords=the+personal+mba&qid=1712172259&sprefix=the+personal+m%2Caps%2C159&sr=8-1",
      },
    ],
  },
  {
    name: "Rob Fitzpatrick",
    books: [
      {
        title: "The Mom Test",
        href: "https://www.amazon.com/Mom-Test-customers-business-everyone/dp/1492180742/ref=sr_1_1?crid=1VH9ZU8LJ1X8V&dib=eyJ2IjoiMSJ9.5p9z7Z3vBw9xQg9zY2zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
  },
  {
    name: "Phil Knight",
    books: [
      {
        title: "Shoe Dog",
        href: "https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike/dp/1501135929/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
  },
  {
    name: "John Warrilow",
    books: [
      {
        title: "Built to Sell",
        href: "https://www.amazon.com/Built-Sell-Creating-Business-Without/dp/1591845823/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
  },
  {
    name: "Peter Thiel",
    books: [
      {
        title: "Zero to One",
        href: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
    starred: true,
  },
  {
    name: "Eric Ries",
    books: [
      {
        title: "The Lean Startup",
        href: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
  },
  {
    name: "David Allen Sibley",
    books: [
      {
        title: "The Sibley Guide to Birds",
        href: "https://www.amazon.com/Sibley-Guide-Birds-2nd/dp/030795790X/ref=sr_1_2?crid=1DRHM8FRTD4IG&dib=eyJ2IjoiMSJ9.t9jWC0NBM7xTeKDJGxrZtxpqkKejHBDAi_Qz5ezIzKRODNu8VmsRc8hMw-H-kFnxzpiGhbJWAz5ffWtskvwDuw9OdxwBh2eOfJriKOwtQGO2HC9uvuAYGyBwd53PiJnNcC1r_vCNHTb2XLQueFU8eRr8l0koiXFlBD3Rxd1ctN0zJLrQPfaURh0geCUpFNkf8CgOj1qiUMb_8hmamLAwMXmUTl1fJbLsFsbzEh_wNDpnf1Aub9ZzCBnPIS4rvprhkyd2fnei_1he9ejNWHpHCAN0N9E0-sLmIv7XHZEb87k.xcP7XD1Y7sQx03vGecEhI-lgkRqG23Lj1vRyCbb_JT4&dib_tag=se&keywords=sibley&qid=1712172941&sprefix=sible%2Caps%2C224&sr=8-2",
      },
      {
        title: "The Sibley Guide to Trees",
        href: "https://www.amazon.com/Sibley-Guide-Trees-David-Allen/dp/037541519X/ref=sr_1_9?crid=1DRHM8FRTD4IG&dib=eyJ2IjoiMSJ9.t9jWC0NBM7xTeKDJGxrZtxpqkKejHBDAi_Qz5ezIzKRODNu8VmsRc8hMw-H-kFnxzpiGhbJWAz5ffWtskvwDuw9OdxwBh2eOfJriKOwtQGO2HC9uvuAYGyBwd53PiJnNcC1r_vCNHTb2XLQueFU8eRr8l0koiXFlBD3Rxd1ctN0zJLrQPfaURh0geCUpFNkf8CgOj1qiUMb_8hmamLAwMXmUTl1fJbLsFsbzEh_wNDpnf1Aub9ZzCBnPIS4rvprhkyd2fnei_1he9ejNWHpHCAN0N9E0-sLmIv7XHZEb87k.xcP7XD1Y7sQx03vGecEhI-lgkRqG23Lj1vRyCbb_JT4&dib_tag=se&keywords=sibley&qid=1712172941&sprefix=sible%2Caps%2C224&sr=8-9",
      },
    ],
    starred: true,
  },
  {
    name: "Ben Horowitz",
    books: [
      {
        title: "The Hard Thing About Hard Things",
        href: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
    starred: true,
  },
  {
    name: "Bitcoin Collective",
    books: [
      {
        title: "The Little Bitcoin Book",
        href: "https://www.amazon.com/Little-Bitcoin-Book-Matters-Financial/dp/1641990503/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
    ],
    starred: true,
  },
  {
    name: "Ray Dalio",
    books: [
      {
        title: "Principles for Dealing with the Changing World Order",
        href: "https://www.amazon.com/Changing-World-Order-Nations-Succeed/dp/1982160276/ref=sr_1_1?crid=126FBGSUCGTMT&dib=eyJ2IjoiMSJ9.aGQYrDp52g_WWyKUPuoRwBSMVzEmvZmvA7K-V1AZJh3WJTW6M6I1bgMteNHBMlMjc0pPYu8tw9qNkMK4gcqNAP1CH0dwSVlTNd16_3hgqUvvl6k2Y6JCmMQOe4ZN8IlXrIHkVdW3pYYAVa_GiUskXEOSkI-XTEMJD_n4l33-mvUOlMCdJRda_HIdE6Ll6Db70VplOm4wWsQPlyP0L5uwVH_SAOEHcjsbmFArw_q-hXI.72SnByVWqF9d_5Rh2N4MLZa1Iax7beGqG_0o-GCB6hQ&dib_tag=se&keywords=principles+for+dealing+with+the+changing+world+order&qid=1712368556&sprefix=principles+for%2Caps%2C161&sr=8-1",
      },
    ],
    starred: true,
  },
  {
    name: "Rob Walling",
    books: [
      {
        title: "Start Small, Stay Small",
        href: "https://www.amazon.com/Start-Small-Stay-Developers-Launching/dp/0615373968/ref=sr_1_1?crid=1QZ7QGZ8Z6Z2C&dib=eyJ2IjoiMSJ9.4J9nJhj8w6q3rQ6zQ1zj3g0Yv1J6YJWv0y5Q9Wn6QI7Y1lYH8b5",
      },
      {
        title: "The SaaS Playbook",
        href: "https://www.amazon.com/SaaS-Playbook-Multimillion-Dollar-Startup-Without/dp/B0C87KHT1L/ref=sr_1_1?dib=eyJ2IjoiMSJ9.pkOQ3vkBuob7LFFRDnw0aLUVk9n8gS1Ye48RRsFIfYGsZ3EwRNVreCuf4F1sVATTVFOZRx6SaXk-xRiVHOx3yabe2CI7MRV5k0kHqyHbxGNkdCPPFKnvjAh6T9qvnwqUbOiXAXMoogIX62IDVACBdxx7oaWvWlfnETrxM7Wz0_wTIz5_oDMCpWOK8m0PKvcO91awDP6OL9bSuikl9LDDroHW8kIdBa75Tz356T5DoYM.V_YReUFkZ5HJbMBK-DzGW5oIZSmaVxwgJwWGRLLLMTc&dib_tag=se&keywords=saas+playbook&qid=1712368424&sr=8-1",
      },
    ],
  },
  {
    name: "Ichiro Kishimi",
    books: [
      {
        title: "The Courage to Be Disliked",
        href: "https://www.amazon.com/Courage-Be-Disliked-Phenomenon-Happiness/dp/1501197274/ref=sr_1_1?crid=2N26IB07NRDZR&dib=eyJ2IjoiMSJ9.lWxcpgPZys4laur_Wj4LtBRVK_KOMo-V356aCTqAyMfurWPkU3SjV1MH8C_wJtiXpKpIat5FsDPlzhuQExYHGYRoU7ofubgkvzsS7_vVImFOc3iOy-ERaYSwxUsdfYuVh6BH_0Vz4tOiv1R57ujdlbctKmXHDb6AaTU6EftPxkGnVDIsKVW3aSgVIXOLIDldh0LzIoSVsWWx_ToXIk-qitPMdmdLhyZkTm_MYsASRMM.RfbjDx_BvXMw0GxIj6rogYjlAiVrymvJP9xKeQYHwMM&dib_tag=se&keywords=courage+to+be+disliked+book&qid=1712368477&sprefix=courage+to+be+dis%2Caps%2C171&sr=8-1",
      },
    ],
  },
  {
    name: "Richard Garrigues",
    books: [
      {
        title: "Birds of Costa Rica",
        href: "https://www.amazon.com/Birds-Costa-Rica-Tropical-Publications/dp/0801479886/ref=sr_1_1?crid=1OAYXEYCKAJQF&dib=eyJ2IjoiMSJ9.QfFoZVQeDEIQBu4GrQAW_ee_P6W-7kNMRdtIt49yob_sOpJrayXZ_kjw1JTxYUoo13A3McLiJP34mvIV4h9lwgGZR1E14E9djjBAn6flFpoTD-UwArj1d1u15tFNv9LemT-inABLQixU-K3sw8-3qQpNaE1F5FtbHMRVaWgPBArXn3kb-J0AdnkohpBKz7RN48cjrC_mTtTZfkIWXZGPuS0MW-LUaCoXg3-gIczWOwo.WvorwoeTIRJ-AutlVse8Lp62hZwbYclG4gKVPXLt7cQ&dib_tag=se&keywords=birds+of+costa+rica+field+guide&qid=1712173252&sprefix=birds+of+costa+%2Caps%2C179&sr=8-1",
      },
    ],
  },
  {
    name: "Lars Svensson, Killian Mullarney, and Dan Zetterström",
    books: [
      {
        title: "Princeton Guide to Birds of Europe",
        href: "https://www.amazon.com/Birds-Europe-Third-Princeton-Guides/dp/069125334X/ref=sr_1_1?crid=NO1R5OECYZD0&dib=eyJ2IjoiMSJ9.Fi3YyQ962nqyxzxT6h8bxaMPgbNhKqoTieZuG2Sap2Pri_Em2ES3orru9L2MZpH5BIuTcdDu9V1xYI0r9AJEEHNbLxPDh26mblSdiUtp08zLw8KcXzVs0AOFEHSH-k3ozqmcUFOKkVDagAT6yvLLuIotQNB4FjoWYXRFTsieoNBydXOimg0FZP_fF67s3TVJNcaB4Ds6nDZlDjPJajxGZci4liLF2PMXzKTwI2L9o_I.7rYOywb3vQb4dIUQR7YlBPpI3fbnyCS7ohgfSg4kl7E&dib_tag=se&keywords=birds+of+europe&qid=1712173270&sprefix=birds+of+euro%2Caps%2C220&sr=8-1",
      },
    ],
    starred: true,
  },
  {
    name: "Jonathan Haidt",
    books: [
      {
        title: "The Coddling of the American Mind",
        href: "https://www.amazon.com/Coddling-American-Mind-Intentions-Generation/dp/0735224919/ref=sr_1_1?crid=1OMPQC4UD3EBD&dib=eyJ2IjoiMSJ9.yyb49J53TZs_9w5jNGcgLPNetMIZ2Xr_G2mUIznFkAWwxGjeBt06h3NCPC86Q4EZeii391HnpZ8K0dnc-_hHVjAUV9QpvLbLl3_H5Zjoep3c15QtOEh2ouunrkKDCiVLmsLdYIcGj0652WrJ6xSm5vqp4SCnU4_1lc3RGSB8ah8JFLrbG8IJR9xlhA-kvXhWudFR0wy6Mih9Ij-F6N2j8x_xvqcyI9acI5dbMzCzXM4.nIpdvSmADCMI0s6sxAZMZVH0pz6c6r8h_e_b8ecx-P4&dib_tag=se&keywords=coddling+of+the+american+mind&qid=1712368649&sprefix=coddling+of+the%2Caps%2C186&sr=8-1",
      },
      {
        title: "The Happiness Hypothesis",
        href: "https://www.amazon.com/Happiness-Hypothesis-Finding-Modern-Ancient/dp/0465028020/ref=sr_1_1?crid=IAKN57L4QRST&dib=eyJ2IjoiMSJ9.FUV4FatOn9DuT-V9so5B1KXxqeOQNcxjbp6rQGSQnXC_Uazv3QLtqPu7Qc4LX-hhiSNOwZGcObdzuR1cjenYuOKO6ACN6v8AJ5tIrkzDk1ll8KU3_vo3j0rz4wP-tvwF8RVEv6grVZ5sN4_cQ7DmF8vmRa2a5mzPrel9hqbbS0MXADTEuzfg-mWth5fdDFqg5t0uM1wegzDKIM4MKGP6ag1zmqTKZWhSBjwBs7zAQC8.SzODm6kqsQJWtxMhupcU1a5vjaH1H1r3fLaMe3RnfUY&dib_tag=se&keywords=happiness+hypothesis&qid=1712368638&sprefix=happiness+hy%2Caps%2C175&sr=8-1",
      },
    ],
  },
  // {
  //   name: "Sun Tzu",
  //   books: [
  //     {
  //       title: "The Art of War",
  //       href: "https://www.amazon.com/Art-War-Everymans-Library/dp/1101908009/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.93b2f623-d1fc-4e87-838f-ff8f9afac55b%3Aamzn1.sym.93b2f623-d1fc-4e87-838f-ff8f9afac55b&crid=11YTN1HK8UN8I&cv_ct_cx=the+art+of+war&dib=eyJ2IjoiMSJ9.4JdYkGlwNS8bKHTbnK_3ycOF91rW26RhX-5eXhHuf3UBPphTXXjnncpMMDtWD8Wh53T6O_-Z-KmHSh4FUdbR7X5anxTHVvi8UbubiXADt1QrIr9jbh9jS2rynDOMsCgc.AG3SLRtG9GFKvxUCxsIT_Neh4LSMNHYDxjHKZgyk3Dw&dib_tag=se&keywords=the+art+of+war&pd_rd_i=1101908009&pd_rd_r=cde17be8-a3ad-479d-9a27-bc112bb660ea&pd_rd_w=igihI&pd_rd_wg=pLYKJ&pf_rd_p=93b2f623-d1fc-4e87-838f-ff8f9afac55b&pf_rd_r=ZXMWR7CTS58ESZKEVVDN&qid=1712173772&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=the+art+of%2Caps%2C173&sr=1-1-6caf8c80-d701-4184-90ff-f670949d61c2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1",
  //     },
  //   ],
  // },
];
