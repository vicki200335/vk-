document.addEventListener('DOMContentLoaded', () => {
    // 模拟用户数据（实际应用中应该从后端获取）
    const users = {
        'admin': { password: 'admin123', role: 'admin' }
    };

    // 初始化额度数据（实际应用中应该从后端获取）
    let quotaData = {
        east: { clinic: 20, yandao: 20 },
        west: { clinic: 20, yandao: 20 },
        south: { clinic: 20, yandao: 20 },
        north: { clinic: 20, yandao: 20 },
        central: { clinic: 20, yandao: 20 }
    };

    // 获取DOM元素
    const loginContainer = document.getElementById('login-container');
    const userInfo = document.getElementById('user-info');
    const adminPanel = document.getElementById('admin-panel');
    const dataPanel = document.getElementById('data-panel');
    const historyPanel = document.getElementById('history-panel');

    // 隐藏不需要的面板
    loginContainer.style.display = 'none';
    userInfo.style.display = 'none';
    adminPanel.style.display = 'none';
    historyPanel.style.display = 'none';

    // 显示数据面板
    dataPanel.style.display = 'block';
    updateQuotaTable();

    // 更新额度表格
    function updateQuotaTable() {
        const tbody = document.getElementById('quota-table-body');
        tbody.innerHTML = '';

        Object.entries(quotaData).forEach(([region, channels]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${getRegionName(region)}</td>
                <td>${channels.clinic}</td>
                <td>${channels.yandao}</td>
                <td>${channels.clinic + channels.yandao}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // 获取区域名称
    function getRegionName(region) {
        const names = {
            east: '东区',
            west: '西区',
            south: '南区',
            north: '北区',
            central: '中区'
        };
        return names[region];
    }

    // 获取渠道名称
    function getChannelName(channel) {
        const names = {
            clinic: '门诊',
            yandao: '严道'
        };
        return names[channel];
    }
});