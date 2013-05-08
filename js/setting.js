/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'jptokyokoganeibudget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* koganei cofog */
  '1': { icon: 'icons/legislative.svg', color: '#D15008', bcolor: '#935B3B' }, // 議会費
  '101': { icon: 'icons/civilian-action.svg.svg', color: '#D15008', bcolor: '#935B3B' }, // 議会費 議会費
  '2': { icon: 'icons/publicaffairs.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費
  '201': { icon: 'icons/planning.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 総務管理費
  '202': { icon: 'icons/financial-admin.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 微税費
  '203': { icon: 'icons/rd-order-safety.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 戸籍住民基本台帳費
  '204': { icon: 'icons/election.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 選挙費
  '205': { icon: 'icons/research.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 統計調査費
  '206': { icon: 'icons/courts.svg', color: '#D15008', bcolor: '#935B3B' }, // 総務費 監査委員費
  '3': { icon: 'icons/family.svg', color: '#D15008', bcolor: '#935B3B' }, // 民生費
  '301': { icon: 'icons/dollar.svg', color: '#D15008', bcolor: '#935B3B' }, // 民生費 社会福祉費
  '302': { icon: 'icons/harbor.svg', color: '#D15008', bcolor: '#935B3B' }, // 民生費 児童福祉費
  '303': { icon: 'icons/culture.svg', color: '#D15008', bcolor: '#935B3B' }, // 民生費 生活保護費
  '304': { icon: 'icons/unemployment.svg', color: '#D15008', bcolor: '#935B3B' }, // 民生費 国民年金費
  '4': { icon: 'icons/health.svg', color: '#D15008', bcolor: '#935B3B' }, // 衛生費
  '401': { icon: 'icons/hospital.svg', color: '#D15008', bcolor: '#935B3B' }, // 衛生費 保健衛生費
  '402': { icon: 'icons/medical-supplies.svg', color: '#D15008', bcolor: '#935B3B' }, // 衛生費 清掃費
  '5': { icon: 'icons/environment.svg', color: '#D15008', bcolor: '#935B3B' }, // 労働費
  '501': { icon: 'icons/tree.svg', color: '#D15008', bcolor: '#935B3B' }, //　労働費 労働諸費
  '6': { icon: 'icons/civilian-action.svg', color: '#D15008', bcolor: '#935B3B' }, // 農林水産費
  '601': { icon: 'icons/civilian-action.svg', color: '#D15008', bcolor: '#935B3B' }, // 農林水産費 農業費
  '7': { icon: 'icons/traffic-watersup.svg', color: '#D15008', bcolor: '#935B3B' }, // 商工費
  '701': { icon: 'icons/traffic-watersup.svg', color: '#D15008', bcolor: '#935B3B' }, // 商工費 商工費
  '8': { icon: 'icons/government.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費
  '801': { icon: 'icons/publicaffairs.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費 土木管理費
  '802': { icon: 'icons/government.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費 道路橋りょう費
  '803': { icon: 'icons/government.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費 河川費
  '804': { icon: 'icons/government.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費 都市計画費
  '805': { icon: 'icons/government.svg', color: '#D15008', bcolor: '#935B3B' }, // 土木費 住宅費
  '9': { icon: 'icons/garbage.svg', color: '#D15008', bcolor: '#935B3B' }, // 消防費
  '901': { icon: 'icons/garbage.svg', color: '#D15008', bcolor: '#935B3B' }, // 消防費 消防費
  '10': { icon: 'icons/schools.svg', color: '#D15008', bcolor: '#935B3B' }, // 教育費
  '1001': { icon: 'icons/education.svg', color: '#D15008', bcolor: '#935B3B' }, // 教育費 教育総労務費
  '1002': { icon: 'icons/pre-school.svg', color: '#D15008', bcolor: '#935B3B' },  // 教育費 小学校費
  '1003': { icon: 'icons/primary.svg', color: '#D15008', bcolor: '#935B3B' }, // 教育費 中学校費
  '1004': { icon: 'icons/books.svg', color: '#D15008', bcolor: '#935B3B' }, // 教育費 社会教育費
  '1005': { icon: 'icons/sports.svg', color: '#D15008', bcolor: '#935B3B' }, // 教育費 保健体育費
  '11': { icon: 'icons/order-safety.svg', color: '#D15008', bcolor: '#935B3B' }, // 公債費
  '1101': { icon: 'icons/order-safety.svg', color: '#D15008', bcolor: '#935B3B' }, // 公債費
  '12': { icon: 'icons/order-safety.svg', color: '#D15008', bcolor: '#935B3B' }, // 諸支出金
  '1201': { icon: 'icons/farms.svg', color: '#D15008', bcolor: '#935B3B' }, // 諸支出金 土地基金費
  '1202': { icon: 'icons/petrol.svg', color: '#D15008', bcolor: '#935B3B' }, // 諸支出金 開発公社費
  '13': { icon: 'icons/admin.svg', color: '#D15008', bcolor: '#935B3B' }, // 予備費
  '1301': { icon: 'icons/admin.svg', color: '#D15008', bcolor: '#935B3B' }  // 予備費 予備費
};


