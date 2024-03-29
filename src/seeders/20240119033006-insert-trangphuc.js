'use strict'


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('trangphuc', 
        [
          {
              "ten":"Áo dài",
              "moTa": "Áo dài thường được may dài đến chân, với thiết kế ôm sát vòng eo tạo nên vẻ đẹp dịu dàng và quyến rũ cho người mặc. Áo dài được sử dụng phổ biến trong các dịp lễ hội, cưới hỏi hoặc các sự kiện trọng đại khác. Nó được xem là biểu tượng của văn hóa truyền thống và sự kiêu sa của người phụ nữ Việt Nam.",
              "nguonGoc": "Nguồn gốc của áo dài Việt Nam được cho là xuất phát từ phong cách áo mặc của phụ nữ Việt Nam xưa, gọi là áo giao lĩnh, đây cũng là kiểu dáng sơ khai nhất của áo dài Việt Nam. Trong suốt nhiều năm lịch sử, áo dài đã trải qua nhiều thời kỳ và thay đổi về kiểu dáng, chất liệu, màu sắc. Tuy nhiên, áo dài ngày nay vẫn giữ được sự truyền thống, nó là biểu tượng văn hóa và vẻ đẹp của phụ nữ Việt Nam.",
              "chatLieu": "Lụa, Nhung, Voan, Gấm",
              "hoaTiet": "Thường là một màu hoặc có các hoạ tiết hoa sen, đồng quê...",
              "hinhAnh": "path/to/picture"
          },
          {
              "ten":"Trang phục truyền thống dân tộc Thái",
              "moTa": "Trang phục truyền thống của phụ nữ Thái thiết kế khá thanh thoát nhằm tôn vinh lên nét đẹp dịu dàng của người con gái Thái. Một bộ trang phục truyền thống của người dân tộc Thái bao gồm: áo ngắn (xửa cỏm), áo dài (xửa chái và xửa luổng), váy (xỉn), thắt lưng (xải cỏm), khăn (piêu), nón (cúp), xà cạp (pepăn khạ), các loại hoa tai, vòng cổ, vòng tay và xà tích.",
              "nguonGoc": null,
              "chatLieu": null,
              "hoaTiet": "Các họa tiết được ưa chuộng của trang phục truyền thống dân tộc Thái thường là hình Mặt Trời, hoa lá, rồng",
              "hinhAnh": "path/to/picture"
          }, 
          {
              "ten":"Trang phục truyền thống dân tộc H'Mông",
              "moTa": "Dân tộc H'Mông có trang phục truyền thống hết sức cầu kì và sặc sỡ, thường làm bằng vải lanh với nhiều màu sắc nổi bật cùng hoa văn đa dạng. Một bộ trang phục hoàn chỉnh thường gồm áo xẻ cổ, váy xòe xếp ly, xà cạp và mũ đội đầu.",
              "nguonGoc": null,
              "chatLieu": null,
              "hoaTiet": "Các họa tiết thổ cẩm hình chữ nhật, hình thoi",
              "hinhAnh": ""
          },
          {
              "ten":"Trang phục truyền thống dân tộc Mường",
              "moTa": "",
              "nguonGoc": "",
              "chatLieu": "",
              "hoaTiet": "",
              "hinhAnh": ""
          },
          {
              "ten": "Áo bà ba",
              "moTa": "Áo bà ba là trang phục truyền thống của người dân miền Nam Việt Nam. Áo bà ba có hai phần chính là áo và quần. Áo bà ba thường được may bằng vải trắng, với hai tà áo trước và sau được ghép lại bằng hai dây áo. Quần bà ba thường được may bằng vải đen hoặc trắng, với ống quần rộng và dài đến mắt cá chân.",
              "nguonGoc": "Áo bà ba có nguồn gốc từ thời nhà Nguyễn (1802-1945). Ban đầu, áo bà ba chỉ là trang phục của những người nông dân, nhưng sau đó đã trở thành trang phục phổ biến của người dân miền Nam.",
              "chatLieu": "Áo bà ba thường được may bằng vải trắng, với hai tà áo trước và sau được ghép lại bằng hai dây áo. Quần bà ba thường được may bằng vải đen hoặc trắng, với ống quần rộng và dài đến mắt cá chân.",
              "hoaTiet": "Họa tiết trên áo bà ba thường là các họa tiết đơn giản, như hoa văn kẻ sọc, kẻ caro,...",
              "hinhAnh": ""
            },
            {
              "ten": "Áo tứ thân",
              "moTa": "Áo tứ thân là trang phục truyền thống của người phụ nữ Việt Nam, đặc biệt là ở miền Trung. Áo tứ thân có bốn vạt áo, được may từ hai mảnh vải dài, vạt trước và vạt sau được ghép lại bằng hai dây áo. Áo tứ thân thường được may bằng vải lụa, gấm, đũi,... với các màu sắc và họa tiết đa dạng.",
              "nguonGoc": "Áo tứ thân có nguồn gốc từ thời nhà Lý (1009-1225). Ban đầu, áo tứ thân chỉ là trang phục của những người phụ nữ quý tộc, nhưng sau đó đã trở thành trang phục phổ biến của người phụ nữ Việt Nam.",
              "chatLieu": "Áo tứ thân thường được may bằng vải lụa, gấm, đũi,... với các màu sắc và họa tiết đa dạng.",
              "hoaTiet": "Họa tiết trên áo tứ thân thường là các họa tiết hoa lá, chim muông,... được thêu bằng tay hoặc in trên vải.",
              "hinhAnh": ""
            }
      ]
        )
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('trangphuc', null, { truncate: true, cascade: true})
    }
};
