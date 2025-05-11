import React from 'react'
import SearchList from '@components/SearchList/SearchList';
function statusCheck() {

    const statusCheckData = [
        {
            type: 'ลิขสิทธิ์',
            count: 152,
            title: 'เพลงรักนิรันดร์',
            applicant: 'นายสมชาย ใจดี',
            workType: 'เพลง',
            submissionDate: '2024-05-10',
            progressStatus: 'กำลังตรวจสอบ',
            requestStatus: 'รอดำเนินการ',
            prepared: true,
            submitted: true,
            requestNumber: 'LC12345678',
            feePaid: true,
            advertised: false,
            registered: false,
            revised: false,
            completed: false,
        },
        {
            type: 'เครื่องหมายการค้า',
            count: 98,
            title: 'ตราเครื่องดื่ม HERB-X',
            applicant: 'บริษัท สมุนไพรไทย จำกัด',
            workType: 'โลโก้',
            submissionDate: '2024-03-22',
            progressStatus: 'ประกาศโฆษณาแล้ว',
            requestStatus: 'อยู่ระหว่างรอรับจดทะเบียน',
            prepared: true,
            submitted: true,
            requestNumber: 'TM98765432',
            feePaid: true,
            advertised: true,
            registered: false,
            revised: false,
            completed: false,
        },
        {
            type: 'สิทธิบัตร',
            count: 64,
            title: 'อุปกรณ์ฟอกอากาศพกพา',
            applicant: 'ดร.วรพล นาคินทร์',
            workType: 'สิ่งประดิษฐ์',
            submissionDate: '2023-12-15',
            progressStatus: 'รับจดทะเบียนแล้ว',
            requestStatus: 'เสร็จสิ้น',
            prepared: true,
            submitted: true,
            requestNumber: 'PT45678901',
            feePaid: true,
            advertised: true,
            registered: true,
            revised: false,
            completed: true,
        },
        {
            type: 'อนุสิทธิบัตร',
            count: 28,
            title: 'เครื่องมือเกษตรอัจฉริยะ',
            applicant: 'บริษัท เกษตรไฮเทค',
            workType: 'เครื่องมือ',
            submissionDate: '2024-01-08',
            progressStatus: 'อยู่ระหว่างแก้ไข',
            requestStatus: 'รอข้อมูลเพิ่มเติม',
            prepared: true,
            submitted: true,
            requestNumber: 'UM202401001',
            feePaid: true,
            advertised: false,
            registered: false,
            revised: true,
            completed: false,
        },
    ];

    const dataTypes = ['ทั้งหมด', 'สิทธิบัตรการประดิษฐ์', 'สิทธิบัตรการออกแบบผลิตภัณฑ์', 'อนุสิทธิบัตร', 'ผังภูมิของวงจรรวม', 'ลิขสิทธิ์', 'ลิขสิทธิ์เพลง', 'เครื่องหมายการค้า', 'สิ่งบ่งชี้ทางภูมิศาสตร์', 'ข้อมูลความหลากหลายทางชีวภาพ', 'ข้อมูลมรดกภูมิปัญญาทางวัฒนธรรม', 'ข้อมูลสมุยไพรไทย'];
    const columns = [
        { key: 'title', label: 'ชื่อเรื่อง' },
        { key: 'applicant', label: 'ชื่อ-นามสกุล' },
        { key: 'workType', label: 'ประเภทผลงาน' },
        { key: 'submissionDate', label: 'วันที่ยื่นคำขอ' },
        { key: 'progressStatus', label: 'สถานะการดำเนินงาน' },
        { key: 'requestStatus', label: 'สถานะคำขอ' },
        { key: 'prepared', label: 'จัดเตรียมคำขอ' },
        { key: 'submitted', label: 'ยื่นคำขอ' },
        { key: 'requestNumber', label: 'เลขคำขอ' },
        { key: 'feePaid', label: 'ชำระค่าธรรมเนียม' },
        { key: 'advertised', label: 'ประกาศโฆษณา' },
        { key: 'registered', label: 'รับจดทะเบียน' },
        { key: 'revised', label: 'แก้ไขเพิ่มเติม' },
        { key: 'completed', label: 'เสร็จสิ้น' },
    ];

    return (
        <div>
            <SearchList
                title="ตรวจสอบสถานะคำขอ"
                dataTypes={dataTypes}
                data={statusCheckData}
                columns={columns}
                hideSearch={true}
            />
        </div>

    );
}

export default statusCheck
