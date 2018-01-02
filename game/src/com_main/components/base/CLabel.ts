/**
 * Created   on 2017/1/4.
 */
class CLabel extends eui.Label {
    public constructor() {
        super();
    }

    private m_iLanIndex:number = 0;

    public set alan(lan:number) {
        this.m_iLanIndex = lan;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        if (this.m_iLanIndex > 0) {
            this.text = L.getLanguage(this.m_iLanIndex);
        }
    }
}