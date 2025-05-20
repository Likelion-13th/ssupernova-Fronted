import React from "react";

const Profile=()=>{
    const formatCurrency=(amount)=>{
        return new Intl.NumberFormat('ko-KR').format(amount);
    };

    return(
        
        <div className="profile-container"> {/* 빨간색 박스 */}
            <div className="profile-section">{/* 노란색 박스 */}
                <div className="profile-name">
                    <span className="profile-realName">ssupernova
                    </span>님
                </div> 
                <div className="profile-membership">[VVIP]회원</div>
            </div>

            <div className="profile-section">
                <div className="profile-stat-label">총 결제 금액</div>
                <div classsName="profile-stat-value">
                    <span>{formatCurrency(1000000)}</span>원
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-stat-label">마일리지</div>
                <div className="profile-stat-label">
                    <span>{formatCurrency(10000)}</span>원</div>
            </div>

        </div>
    )
}

export default Profile;