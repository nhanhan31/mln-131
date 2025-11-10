import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ImageFrame from '../components/ImageFrame';

const PageContainer = styled(Container)`
  padding: 60px 20px;
  max-width: 1200px;
`;

const Section = styled(motion.section)`
  margin-bottom: 60px;
`;

const SectionTitle = styled(Typography)`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
  }
`;

const ContentText = styled(Typography)`
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
  color: ${props => props.theme.colors.text};
`;

const HighlightBox = styled(Box)`
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 4px solid ${props => props.theme.colors.accent};
  padding: 24px;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ImageGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
`;

const QuoteBox = styled(Box)`
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 24px 32px;
  margin: 30px 0;
  border-radius: 8px;
  border-left: 4px solid #1976d2;
  font-style: italic;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SocialismTransition: React.FC = () => {
  return (
    <PageContainer>
      {/* Header Section */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#d32f2f', textAlign: 'center', mb: 4 }}>
          Xã hội Chủ nghĩa và Quá độ lên Chủ nghĩa Xã hội
        </Typography>
        
        <ContentText variant="body1">
          Xã hội chủ nghĩa (XHCN) không phải là một trạng thái tĩnh mà là một quá trình phát triển lịch sử, một giai đoạn quá độ tất yếu từ chủ nghĩa tư bản (CNTB) lên chủ nghĩa cộng sản (CNCS). Đây là thời kỳ mà xã hội loài người xây dựng những nền tảng vật chất, kinh tế, văn hóa và con người mới để tiến tới xã hội cộng sản cao cấp.
        </ContentText>

        <ImageGallery>
          <ImageFrame
            src="/images/placeholder-socialism-1.jpg"
            alt="Biểu tượng xã hội chủ nghĩa"
            caption="Biểu tượng của chủ nghĩa xã hội - Búa liềm"
          />
          <ImageFrame
            src="/images/placeholder-socialism-2.jpg"
            alt="Công nhân xây dựng XHCN"
            caption="Giai cấp công nhân - Lực lượng xây dựng XHCN"
          />
        </ImageGallery>
      </Section>

      <Divider sx={{ my: 6 }} />

      {/* Bản chất của XHCN */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SectionTitle variant="h4">
          1. Bản Chất của Chủ Nghĩa Xã Hội
        </SectionTitle>

        <ContentText variant="body1">
          Theo quan điểm của chủ nghĩa Mác - Lênin, xã hội chủ nghĩa có những đặc điểm bản chất sau:
        </ContentText>

        <HighlightBox>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#e65100' }}>
            ⚙️ Về kinh tế:
          </Typography>
          <ContentText variant="body1">
            - <strong>Công hữu hóa tư liệu sản xuất:</strong> Xóa bỏ chế độ sở hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất, thiết lập chế độ công hữu (sở hữu toàn dân và sở hữu tập thể).<br/>
            - <strong>Kinh tế có kế hoạch:</strong> Thay thế quy luật giá trị tự phát của CNTB bằng sản xuất có kế hoạch phục vụ lợi ích nhân dân.<br/>
            - <strong>Phân phối theo lao động:</strong> "Làm theo năng lực, hưởng theo lao động" - nguyên tắc cơ bản của thời kỳ XHCN.
          </ContentText>
        </HighlightBox>

        <ImageFrame
          src="/images/placeholder-economy.jpg"
          alt="Kinh tế XHCN"
          caption="Nền kinh tế xã hội chủ nghĩa - Công hữu hóa TLSX"
        />

        <HighlightBox>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#e65100' }}>
            🏛️ Về chính trị:
          </Typography>
          <ContentText variant="body1">
            - <strong>Chuyên chính vô sản:</strong> Nhà nước của giai cấp công nhân và nhân dân lao động, thực hiện dân chủ rộng rãi nhất cho đại đa số nhân dân.<br/>
            - <strong>Đảng Cộng sản lãnh đạo:</strong> Đảng của giai cấp công nhân giữ vai trò lãnh đạo toàn diện về chính trị, tư tưởng và tổ chức.<br/>
            - <strong>Liên minh công - nông - trí:</strong> Củng cố liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức.
          </ContentText>
        </HighlightBox>

        <ImageGallery>
          <ImageFrame
            src="/images/placeholder-politics-1.jpg"
            alt="Nhà nước XHCN"
            caption="Nhà nước pháp quyền xã hội chủ nghĩa"
          />
          <ImageFrame
            src="/images/placeholder-politics-2.jpg"
            alt="Đảng Cộng sản lãnh đạo"
            caption="Vai trò lãnh đạo của Đảng Cộng sản"
          />
        </ImageGallery>

        <HighlightBox>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#e65100' }}>
            📖 Về văn hóa - tư tưởng:
          </Typography>
          <ContentText variant="body1">
            - <strong>Chủ nghĩa Mác - Lênin làm nền tảng tư tưởng:</strong> Xây dựng đời sống tinh thần trên cơ sở thế giới quan và phương pháp luận khoa học.<br/>
            - <strong>Xây dựng con người mới:</strong> Con người xã hội chủ nghĩa có ý thức tập thể cao, yêu lao động, tôn trọng pháp luật và đạo đức.<br/>
            - <strong>Văn hóa tiên tiến:</strong> Kế thừa tinh hoa văn hóa nhân loại, phát huy bản sắc dân tộc, hướng tới giá trị chân - thiện - mỹ.
          </ContentText>
        </HighlightBox>

        <ImageFrame
          src="/images/placeholder-culture.jpg"
          alt="Văn hóa XHCN"
          caption="Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc"
        />
      </Section>

      <Divider sx={{ my: 6 }} />

      {/* Thời kỳ quá độ */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SectionTitle variant="h4">
          2. Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội
        </SectionTitle>

        <ContentText variant="body1">
          Thời kỳ quá độ là giai đoạn lịch sử khách quan, bắt đầu từ khi cách mạng vô sản giành được thắng lợi, thiết lập được chính quyền của giai cấp công nhân và kết thúc khi đã xây dựng xong cơ sở vật chất - kỹ thuật của CNXH và hoàn thiện cơ bản các quan hệ sản xuất xã hội chủ nghĩa.
        </ContentText>

        <QuoteBox>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            "Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa có một thời kỳ biến đổi cách mạng từ xã hội này sang xã hội kia. Tương ứng với thời kỳ đó cũng có một thời kỳ quá độ về chính trị, trong đó Nhà nước không thể là gì khác ngoài chuyên chính cách mạng của giai cấp vô sản."
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'normal', fontWeight: 600, textAlign: 'right' }}>
            - C. Mác, "Phê phán Cương lĩnh Gotha"
          </Typography>
        </QuoteBox>

        <ImageGallery>
          <ImageFrame
            src="/images/placeholder-transition-1.jpg"
            alt="Cách mạng xã hội chủ nghĩa"
            caption="Cách mạng XHCN - Điểm khởi đầu thời kỳ quá độ"
          />
          <ImageFrame
            src="/images/placeholder-transition-2.jpg"
            alt="Xây dựng CNXH"
            caption="Xây dựng cơ sở vật chất - kỹ thuật của CNXH"
          />
          <ImageFrame
            src="/images/placeholder-transition-3.jpg"
            alt="Phát triển lực lượng sản xuất"
            caption="Phát triển lực lượng sản xuất hiện đại"
          />
        </ImageGallery>

        <HighlightBox>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#e65100' }}>
            🎯 Nhiệm vụ chủ yếu của thời kỳ quá độ:
          </Typography>
          <ContentText variant="body1">
            <strong>1. Về kinh tế:</strong><br/>
            - Cải tạo xã hội chủ nghĩa đối với các thành phần kinh tế phi xã hội chủ nghĩa<br/>
            - Xây dựng cơ sở vật chất - kỹ thuật của CNXH thông qua công nghiệp hóa xã hội chủ nghĩa<br/>
            - Phát triển lực lượng sản xuất, nâng cao năng suất lao động xã hội<br/><br/>

            <strong>2. Về chính trị:</strong><br/>
            - Củng cố và hoàn thiện chuyên chính vô sản<br/>
            - Xây dựng Đảng cộng sản trong sạch, vững mạnh<br/>
            - Phát huy dân chủ xã hội chủ nghĩa, tăng cường pháp chế<br/><br/>

            <strong>3. Về văn hóa - xã hội:</strong><br/>
            - Cải tạo con người cũ, xây dựng con người mới xã hội chủ nghĩa<br/>
            - Xóa bỏ tàn dư tư tưởng cũ, xây dựng đời sống tinh thần mới<br/>
            - Phát triển giáo dục, khoa học - công nghệ, văn hóa - nghệ thuật
          </ContentText>
        </HighlightBox>

        <ImageFrame
          src="/images/placeholder-tasks.jpg"
          alt="Nhiệm vụ thời kỳ quá độ"
          caption="Các nhiệm vụ trọng tâm trong thời kỳ quá độ"
        />
      </Section>

      <Divider sx={{ my: 6 }} />

      {/* Đặc điểm thời kỳ quá độ */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <SectionTitle variant="h4">
          3. Đặc Điểm của Thời Kỳ Quá Độ
        </SectionTitle>

        <ContentText variant="body1">
          Thời kỳ quá độ có những đặc điểm riêng biệt, phân biệt nó với cả CNTB và CNXH đã hoàn thiện:
        </ContentText>

        <HighlightBox>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            🔄 <strong>Tính chất hai mặt:</strong> Vừa mang tính chất của chủ nghĩa xã hội (đã có chính quyền vô sản, bắt đầu công hữu hóa TLSX) nhưng vẫn còn nhiều tàn dư của chủ nghĩa tư bản (tư tưởng, thói quen cũ, các quan hệ kinh tế cũ...).<br/><br/>
            
            ⚖️ <strong>Đấu tranh giai cấp quyết liệt:</strong> Cuộc đấu tranh giữa con đường XHCN và con đường CNTB, giữa cái mới và cái cũ diễn ra gay gắt trên mọi lĩnh vực.<br/><br/>
            
            📈 <strong>Tính lâu dài và phức tạp:</strong> Thời kỳ quá độ kéo dài qua nhiều thế hệ, trải qua nhiều giai đoạn với những nhiệm vụ, phương pháp khác nhau.<br/><br/>
            
            🌍 <strong>Đa dạng về mô hình:</strong> Mỗi nước có điểm xuất phát, điều kiện lịch sử cụ thể khác nhau nên con đường quá độ cũng có những nét đặc thù riêng.
          </Typography>
        </HighlightBox>

        <ImageGallery>
          <ImageFrame
            src="/images/placeholder-characteristics-1.jpg"
            alt="Đấu tranh giai cấp"
            caption="Đấu tranh giữa cái mới và cái cũ"
          />
          <ImageFrame
            src="/images/placeholder-characteristics-2.jpg"
            alt="Đa dạng mô hình"
            caption="Mỗi nước có con đường riêng"
          />
        </ImageGallery>
      </Section>

      <Divider sx={{ my: 6 }} />

      {/* Bài học lịch sử */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <SectionTitle variant="h4">
          4. Bài Học Lịch Sử và Thực Tiễn
        </SectionTitle>

        <ContentText variant="body1">
          Từ thực tiễn xây dựng CNXH ở Liên Xô, Đông Âu, Trung Quốc, Việt Nam và các nước khác, chúng ta rút ra những bài học quan trọng:
        </ContentText>

        <HighlightBox>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            ✅ <strong>Phải kiên định mục tiêu CNXH:</strong> Không lay chuyển trước mọi khó khăn thử thách, nhưng phải linh hoạt về phương pháp, bước đi.<br/><br/>
            
            ✅ <strong>Đổi mới sáng tạo, phù hợp điều kiện thực tế:</strong> Không cứng nhắc, giáo điều mà phải vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của mỗi nước.<br/><br/>
            
            ✅ <strong>Vai trò lãnh đạo của Đảng Cộng sản:</strong> Đảng phải thực sự trong sạch, vững mạnh, gắn bó mật thiết với nhân dân, không ngừng đổi mới để nâng cao năng lực lãnh đạo.<br/><br/>
            
            ✅ <strong>Phát triển kinh tế là trung tâm:</strong> Phải tập trung xây dựng nền kinh tế vững mạnh, nâng cao đời sống nhân dân, tạo cơ sở vật chất cho CNXH.<br/><br/>
            
            ✅ <strong>Kết hợp phát triển kinh tế với tiến bộ, công bằng xã hội:</strong> Không hy sinh công bằng xã hội vì tăng trưởng kinh tế và ngược lại.
          </Typography>
        </HighlightBox>

        <ImageGallery>
          <ImageFrame
            src="/images/placeholder-vietnam-1.jpg"
            alt="Việt Nam đổi mới"
            caption="Việt Nam trên con đường đổi mới, xây dựng CNXH"
          />
          <ImageFrame
            src="/images/placeholder-vietnam-2.jpg"
            alt="Thành tựu Việt Nam"
            caption="Thành tựu xây dựng và phát triển đất nước"
          />
          <ImageFrame
            src="/images/placeholder-vietnam-3.jpg"
            alt="Tương lai Việt Nam"
            caption="Hướng tới mục tiêu dân giàu, nước mạnh"
          />
        </ImageGallery>

        <QuoteBox>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            "Mục tiêu của chúng ta là dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Phải làm cho cuộc sống của nhân dân ngày càng ấm no, tự do, hạnh phúc, tạo điều kiện cho mọi người phát triển toàn diện về trí tuệ, thể lực, thẩm mỹ."
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'normal', fontWeight: 600, textAlign: 'right' }}>
            - Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011)
          </Typography>
        </QuoteBox>
      </Section>

      <Divider sx={{ my: 6 }} />

      {/* Kết luận */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <SectionTitle variant="h4">
          5. Kết Luận
        </SectionTitle>

        <ContentText variant="body1">
          Xã hội chủ nghĩa là sự lựa chọn tất yếu của lịch sử, là giai đoạn quá độ cần thiết để tiến tới chủ nghĩa cộng sản. Thời kỳ quá độ lên CNXH là một quá trình lâu dài, phức tạp, đầy khó khăn thử thách nhưng cũng tràn đầy triển vọng.
        </ContentText>

        <ContentText variant="body1">
          Mỗi quốc gia có điều kiện lịch sử, văn hóa, trình độ phát triển khác nhau sẽ có con đường quá độ riêng. Nhưng tất cả đều phải tuân theo những quy luật khách quan của sự phát triển xã hội mà chủ nghĩa Mác - Lênin đã khám phá và luận giải.
        </ContentText>

        <ContentText variant="body1">
          Việt Nam, với hơn 35 năm đổi mới, đã và đang từng bước xây dựng thành công chủ nghĩa xã hội mang bản sắc dân tộc, khẳng định giá trị và sức sống của con đường xã hội chủ nghĩa trong thời đại mới.
        </ContentText>

        <ImageFrame
          src="/images/placeholder-conclusion.jpg"
          alt="Tương lai CNXH"
          caption="Chủ nghĩa xã hội - Con đường tất yếu của nhân loại"
        />
      </Section>
    </PageContainer>
  );
};

export default SocialismTransition;
