import React from 'react'
import SearchList from '@components/SearchList/SearchList';
function SearchStatistics() {

    const SearchStatisticsData = [
        { type: 'ลิขสิทธิ์', count: 152, details: 'ลิขสิทธิ์เพลง' },
        { type: 'ลิขสิทธิ์', count: 98, details: 'ลิขสิทธิ์หนังสือ' },
        { type: 'ลิขสิทธิ์', count: 245, details: 'ลิขสิทธิ์ภาพยนตร์' },
        { type: 'ลิขสิทธิ์', count: 87, details: 'ลิขสิทธิ์ซอฟต์แวร์' },
        { type: 'เครื่องหมายการค้า', count: 321, details: 'เครื่องหมายการค้าผลิตภัณฑ์อาหาร' },
        { type: 'เครื่องหมายการค้า', count: 187, details: 'เครื่องหมายการค้าเสื้อผ้า' },
        { type: 'เครื่องหมายการค้า', count: 134, details: 'เครื่องหมายการค้าเครื่องสำอาง' },
        { type: 'เครื่องหมายการค้า', count: 78, details: 'เครื่องหมายการค้าเครื่องใช้ไฟฟ้า' },
        { type: 'สิทธิบัตร', count: 92, details: 'สิทธิบัตรการประดิษฐ์' },
        { type: 'สิทธิบัตร', count: 56, details: 'สิทธิบัตรการออกแบบผลิตภัณฑ์' },
        { type: 'สิทธิบัตร', count: 113, details: 'สิทธิบัตรกระบวนการผลิต' },
        { type: 'สิทธิบัตร', count: 67, details: 'สิทธิบัตรยา' },
        { type: 'อนุสิทธิบัตร', count: 45, details: 'อนุสิทธิบัตรสิ่งประดิษฐ์' },
        { type: 'อนุสิทธิบัตร', count: 32, details: 'อนุสิทธิบัตรเครื่องมือ' },
    ];
    const dataTypes = ['ทั้งหมด', 'สิทธิบัตรการประดิษฐ์', 'สิทธิบัตรการออกแบบผลิตภัณฑ์', 'อนุสิทธิบัตร', 'ผังภูมิของวงจรรวม', 'ลิขสิทธิ์', 'ลิขสิทธิ์เพลง', 'เครื่องหมายการค้า', 'สิ่งบ่งชี้ทางภูมิศาสตร์', 'ข้อมูลความหลากหลายทางชีวภาพ', 'ข้อมูลมรดกภูมิปัญญาทางวัฒนธรรม', 'ข้อมูลสมุยไพรไทย'];
    const columns = [
        { key: 'type', label: 'ประเภทรายการ' },
        { key: 'count', label: 'จำนวนรายการ' },
        { key: 'details', label: 'ข้อมูล' }
    ];
    return (
        <div>
            <SearchList
                title="บริการค้นหาข้อมูลทรัพย์สินทางปัญญา"
                dataTypes={dataTypes}
                data={SearchStatisticsData}
                columns={columns}
                hideSearch={false}
            />
        </div>
    );
}

export default SearchStatistics
